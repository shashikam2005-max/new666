import React, { useState,  useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  
  Film,
  ArrowRight,

 
 
  CheckCircle2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';


interface VideoShowcaseSectionProps {
  onStartQuiz: () => void;
}

const DEFAULT_VIDEO_SRC = "/Stylecue_video.mp4";


export const VideoShowcaseSection: React.FC<VideoShowcaseSectionProps> = ({ onStartQuiz }) => {
  const { themeConfig } = useTheme();
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(18);
  const [isMuted, setIsMuted] = useState(true);
  
  const [isFullscreen, setIsFullscreen] = useState(false);
  
 
  

  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Load video on mount: First check server (/Stylecue_video.mp4), then check IndexedDB cache
  
  

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
    if (videoRef.current ) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
    
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current ) {
      videoRef.current.currentTime = time;
    }
  };

  // Core handler for saving and hosting the video file
  

  

  

  

 

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
          
         
          className="relative rounded-3xl overflow-hidden glass-panel-elevated border shadow-2xl aspect-video group bg-black flex flex-col justify-between transition-all duration-300 border-white/15"
          
        >
          {/* Drag & Drop Overlay Indicator */}
          

          {/* Native Video Element if uploaded or default source */}
         <video
  ref={videoRef }
  src={ DEFAULT_VIDEO_SRC}
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
