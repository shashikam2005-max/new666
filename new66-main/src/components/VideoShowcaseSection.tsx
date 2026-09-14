import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Upload,
  Film,
  ArrowRight,
  Check,
  AlertCircle,
  HelpCircle,
  RefreshCw,
  CheckCircle2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import {
  saveVideoToIndexedDB,
  getVideoFromIndexedDB,
  uploadVideoToServer,
  checkServerVideoStatus
} from '../utils/videoStorage';

interface VideoShowcaseSectionProps {
  onStartQuiz: () => void;
}

const DEFAULT_VIDEO_SRC = "/Stylecue_video.mp4";
const FALLBACK_POSTER = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80';

export const VideoShowcaseSection: React.FC<VideoShowcaseSectionProps> = ({ onStartQuiz }) => {
  const { themeConfig } = useTheme();
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(18);
  const [isMuted, setIsMuted] = useState(true);
  const [customVideoSrc, setCustomVideoSrc] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [hostingStatus, setHostingStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [isServerHosted, setIsServerHosted] = useState<boolean>(false);
  const [showHostingGuide, setShowHostingGuide] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Load video on mount: First check server (/Stylecue_video.mp4), then check IndexedDB cache
  useEffect(() => {
    let isMounted = true;

    async function initVideo() {
      try {
        // 1. Check if server has /Stylecue_video.mp4
        const serverStatus = await checkServerVideoStatus();
        if (serverStatus.exists && isMounted) {
          setCustomVideoSrc(serverStatus.url);
          setIsServerHosted(true);
          setHostingStatus('saved');
          setStatusMessage('Hosted on server (/public/Stylecue_video.mp4)');
          return;
        }

        // 2. Check if IndexedDB has a previously uploaded video
        const cachedBlob = await getVideoFromIndexedDB();
        if (cachedBlob && isMounted) {
          const blobUrl = URL.createObjectURL(cachedBlob);
          setCustomVideoSrc(blobUrl);
          setHostingStatus('saved');
          setStatusMessage('Loaded from local cache. Upload to sync with server.');

          // Try background sync to server if server doesn't have it yet
          uploadVideoToServer(cachedBlob).then((res) => {
            if (res.success && isMounted) {
              setIsServerHosted(true);
              setStatusMessage('Hosted on server (/public/Stylecue_video.mp4)');
            }
          });
          return;
        }

        // 3. Check direct /Stylecue_video.mp4 load
        if (isMounted) {
          setCustomVideoSrc(DEFAULT_VIDEO_SRC);
        }
      } catch (err) {
        console.warn('Video init check error:', err);
      }
    }

    initVideo();

    return () => {
      isMounted = false;
    };
  }, []);

  // Sync custom video player state
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const togglePlay = () => {
    if (videoRef.current && customVideoSrc) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current && customVideoSrc) {
      videoRef.current.currentTime = time;
    }
  };

  // Core handler for saving and hosting the video file
  const processVideoFile = async (file: File) => {
    if (!file) return;

    try {
      setIsUploading(true);
      setHostingStatus('saving');
      setStatusMessage('Embedding and saving video to /public/Stylecue_video.mp4...');

      // 1. Immediately create local URL for instant smooth playback
      const localUrl = URL.createObjectURL(file);
      setCustomVideoSrc(localUrl);
      setIsPlaying(true);
      setCurrentTime(0);

      // 2. Persist to IndexedDB so browser always remembers across reloads
      await saveVideoToIndexedDB(file);

      // 3. Upload directly to the server so it writes to /public/Stylecue_video.mp4
      const uploadRes = await uploadVideoToServer(file);

      if (uploadRes.success) {
        setIsServerHosted(true);
        setHostingStatus('saved');
        setStatusMessage('Video saved to /public/Stylecue_video.mp4. Ready for hosting!');
      } else {
        setHostingStatus('saved');
        setStatusMessage('Video saved locally in browser. Note: Place in /public for all visitors.');
      }
    } catch (err: any) {
      console.error('Error processing video:', err);
      setHostingStatus('error');
      setStatusMessage(err?.message || 'Failed to save video');
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processVideoFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('video/')) {
      processVideoFile(file);
    }
  };

  const handleFullscreenToggle = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section
      id="video-demo"
      className="px-4 sm:px-8 md:px-16 w-full max-w-[1440px] mx-auto py-16 md:py-24 relative"
    >
      {/* Header Info */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border text-xs font-mono font-bold uppercase tracking-wider">
          <Film className="w-3.5 h-3.5" style={{ color: themeConfig.primaryAccent }} />
          StyleCue Commercial & Demo Video
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Watch <span style={{ color: themeConfig.primaryAccent }}>StyleCue</span> in Action
        </h2>

        <p className="text-base sm:text-lg opacity-80 leading-relaxed font-normal">
          See how StyleCue turns chaotic clothing racks and fitting room frustration into an effortless, personalized styling experience in under 60 seconds.
        </p>
      </div>

      {/* Main Video Cinema Theater (Spacious, Centered Screen Without Chapters) */}
      <div className="max-w-5xl mx-auto space-y-6">
        <div
          ref={containerRef}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative rounded-3xl overflow-hidden glass-panel-elevated border shadow-2xl aspect-video group bg-black flex flex-col justify-between transition-all duration-300 ${
            isDragOver ? 'border-2 ring-4 ring-purple-500/50 scale-[1.01]' : 'border-white/15'
          }`}
          style={{
            borderColor: isDragOver ? themeConfig.primaryAccent : undefined,
          }}
        >
          {/* Drag & Drop Overlay Indicator */}
          {isDragOver && (
            <div className="absolute inset-0 z-40 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center pointer-events-none p-6 text-center">
              <Upload className="w-16 h-16 animate-bounce mb-3" style={{ color: themeConfig.primaryAccent }} />
              <h4 className="text-xl font-bold text-white mb-1">Drop your StyleCue Video Here</h4>
              <p className="text-xs text-white/80 max-w-sm">
                We will embed the video and save it to /public/Stylecue_video.mp4 for permanent hosting.
              </p>
            </div>
          )}

          {/* Native Video Element if uploaded or default source */}
         <video
  ref={videoRef }
  src={customVideoSrc || DEFAULT_VIDEO_SRC}
  className="w-full h-full object-cover"
  onLoadedMetadata={handleTimeUpdate}
  onTimeUpdate={handleTimeUpdate}
  onPlay={() => setIsPlaying(true)}
  onPause={() => setIsPlaying(false)}
  onError={() => {
    console.warn("StyleCue video failed to load.");
  }}
  autoPlay
  loop
  playsInline
  muted={isMuted}
/>

 

            
     
           

          {/* Bottom Controls Bar */}
          <div className="relative z-20 p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent border-t border-white/10 space-y-2 mt-auto">
            {/* Progress Slider */}
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={0}
                max={duration}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                style={{
                  accentColor: themeConfig.primaryAccent
                }}
              />
            </div>

            {/* Controls and Timestamps */}
            <div className="flex items-center justify-between text-xs text-white pt-1 font-mono">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>

                <button
                  onClick={() => {
                    setCurrentTime(0);
                    if (videoRef.current) videoRef.current.currentTime = 0;
                  }}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  title="Restart"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="opacity-80">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Upload video button */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="video/mp4,video/webm,video/ogg,video/quicktime"
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="px-3 py-1.5 rounded-xl glass-panel border border-white/15 text-[11px] hover:bg-white/15 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  title="Upload video file to host permanently in /public/Stylecue_video.mp4"
                >
                  {isUploading ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" />
                  ) : (
                    <Upload className="w-3.5 h-3.5" />
                  )}
                  <span>{isUploading ? 'Saving...' : customVideoSrc ? 'Replace Video' : 'Add Video File (.mp4)'}</span>
                </button>

                <button
                  onClick={handleFullscreenToggle}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlights & CTA Bar */}
        <div className="p-6 rounded-3xl glass-panel-elevated border border-white/15 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Instant Outfit Coordination</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Real-Time Size & Stock Verification</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Seamless Fitting Room Experience</span>
            </div>
          </div>

          <button
            onClick={onStartQuiz}
            className="px-6 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider text-slate-950 transition-all flex items-center justify-center gap-2 shadow-xl hover:opacity-90 active:scale-95 cursor-pointer shrink-0 whitespace-nowrap"
            style={{ backgroundColor: themeConfig.primaryAccent }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Experience StyleCue Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
