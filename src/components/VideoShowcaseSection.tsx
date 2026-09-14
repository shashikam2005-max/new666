import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Sparkles,
  Film,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface VideoShowcaseSectionProps {
  onStartQuiz: () => void;
}

const VIDEO_SRC = "/Stylecue_video.mp4";

export const VideoShowcaseSection: React.FC<VideoShowcaseSectionProps> = ({ onStartQuiz }) => {
  const { themeConfig } = useTheme();
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(18);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-hide controls during playback on desktop after 3s of inactivity
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  useEffect(() => {
    // Attempt auto-play when component mounts
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay with sound might be blocked, ensure muted
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
            }
          });
      }
    }

    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration && !isNaN(videoRef.current.duration)) {
      setDuration(videoRef.current.duration);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowControls(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
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
          Official StyleCue Commercial
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Watch <span style={{ color: themeConfig.primaryAccent }}>StyleCue</span> in Action
        </h2>

        <p className="text-base sm:text-lg opacity-80 leading-relaxed font-normal">
          See how StyleCue turns chaotic clothing racks and fitting room frustration into an effortless, personalized styling experience in under 60 seconds.
        </p>
      </div>

      {/* Main Video Cinema Theater (Direct built-in video, playable instantly on any device) */}
      <div className="max-w-5xl mx-auto space-y-6">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isPlaying && setShowControls(false)}
          className="relative rounded-3xl overflow-hidden glass-panel-elevated border border-white/15 shadow-2xl aspect-video group bg-black flex flex-col justify-between"
        >
          {/* Permanent embedded video element */}
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            className="w-full h-full object-cover cursor-pointer"
            onClick={togglePlay}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
          />

          {/* Top Overlay Badge */}
          <div
            className={`absolute top-4 left-4 z-20 flex items-center gap-2 transition-opacity duration-300 pointer-events-none ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="px-3 py-1 rounded-full glass-panel border border-white/20 text-[11px] font-mono font-bold uppercase tracking-wider text-white flex items-center gap-1.5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>StyleCue Experience</span>
            </div>
          </div>

          {/* Audio Unmute Quick-Pill for mobile / quick access */}
          {isMuted && (
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={toggleMute}
                className="px-3 py-1.5 rounded-full glass-panel-elevated border border-white/20 text-xs text-white font-mono flex items-center gap-1.5 backdrop-blur-md hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
              >
                <VolumeX className="w-3.5 h-3.5 text-amber-300" />
                <span>Tap to Unmute</span>
              </button>
            </div>
          )}

          {/* Center Play/Pause Indicator (visible when paused) */}
          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer transition-all"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 text-slate-950"
                style={{ backgroundColor: themeConfig.primaryAccent }}
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </div>
          )}

          {/* Bottom Controls Bar */}
          <div
            className={`relative z-20 p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent border-t border-white/10 space-y-2 mt-auto transition-opacity duration-300 ${
              showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Progress Slider */}
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={0}
                max={duration || 18}
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
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>

                <button
                  onClick={handleRestart}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  title="Restart Video"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-amber-300" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="opacity-80 text-[11px] sm:text-xs">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
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
