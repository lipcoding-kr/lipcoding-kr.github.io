import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const VideoSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [showSoundTooltip, setShowSoundTooltip] = useState(true);
  const [showScrollTooltip, setShowScrollTooltip] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleMute = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const currentSrc = iframe.src;
      
      if (isMuted) {
        // Unmute by changing mute=1 to mute=0
        iframe.src = currentSrc.replace('mute=1', 'mute=0');
        setIsMuted(false);
        setShowSoundTooltip(false);
      } else {
        // Mute by changing mute=0 to mute=1
        iframe.src = currentSrc.replace('mute=0', 'mute=1');
        setIsMuted(true);
      }
    }
  };

  // Auto hide sound tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSoundTooltip(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Show scroll tooltip after 1 second (after video starts)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollTooltip(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* YouTube Video Background - Full screen */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-center items-center p-0 md:p-8"> {/* MODIFIED */}
        <iframe
          ref={iframeRef}
          src="https://www.youtube.com/embed/IUY0TJEwnGA?si=SRK--23DlHJVvUe4&controls=0&autoplay=1&loop=1&playlist=IUY0TJEwnGA&showinfo=0&rel=0&modestbranding=1&mute=1&enablejsapi=1&playsinline=1&start=1"
          className="block w-screen h-[56.25vw] md:w-full md:h-full md:aspect-video" // MODIFIED
          style={{ // MODIFIED
            pointerEvents: 'none',
            border: 'none'
          }}
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        />
      </div>

      {/* Sound Control Button */}
      <button
        onClick={toggleMute}
        className="absolute top-6 right-6 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
        aria-label={isMuted ? "음성 켜기" : "음성 끄기"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>

      {/* Custom Sound Tooltip */}
      {showSoundTooltip && isMuted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 right-6 z-40 bg-white rounded-2xl shadow-2xl p-4 max-w-xs"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Tooltip Arrow */}
          <div className="absolute -top-2 right-8 w-4 h-4 bg-white transform rotate-45 shadow-lg"></div>
          
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Volume2 className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 font-semibold text-sm">소리를 켜주세요!</h3>
            </div>
            <button
              onClick={() => setShowSoundTooltip(false)}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}

      {/* Scroll Down Tooltip */}
      {showScrollTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-16 left-1/2 z-40 cursor-pointer" // Added cursor-pointer
          onClick={() => {
            const heroSection = document.getElementById('hero-section');
            if (heroSection) {
              heroSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <p className="text-gray-900 font-medium text-sm">스크롤 아래로</p>
            </div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg"
            >
              <ArrowDown className="w-6 h-6 text-gray-900" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default VideoSection;
