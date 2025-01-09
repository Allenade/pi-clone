import { Link } from "react-router-dom";
import { CirclePlay, X } from "lucide-react";
import styles from "./Hero.module.css";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            The First Digital Currency You Can Mine on Your Phone
          </h1>
          <p className={styles.subtitle}>
            Start mining Pi cryptocurrency today with our free, energy-light
            mobile app!
          </p>
          <div className={styles.buttons}>
            <Link to="/pi/validate" className={styles.validateButton}>
              VALIDATE WALLET
              <span className={styles.downloadIcon}>↓</span>
            </Link>
            <Link to="/pi/validate" className={styles.exchangeButton}>
              Pi Exchange
              <span className={styles.arrowIcon}>→</span>
            </Link>
          </div>
        </div>
        <div className={styles.imageWrapper} onMouseMove={handleMouseMove}>
          {isMobile ? (
            <div className={styles.youtubePreview}>
              <img
                src="https://img.youtube.com/vi/MsOaC61cR3U/0.jpg"
                alt="Video Preview"
                className={styles.thumbnailImage}
                onClick={() => setIsVideoOpen(true)}
              />
              <CirclePlay
                className={styles.playOverlay}
                size={50}
                onClick={() => setIsVideoOpen(true)}
              />
            </div>
          ) : (
            <>
              <img
                src="https://www.coreteams.net/_next/image?url=%2Fimages%2Fpi_video-6.webp&w=828&q=75"
                alt="Phone Mockup"
                className={styles.phoneImage}
              />
              <button
                onClick={() => setIsVideoOpen(true)}
                className={styles.playButton}
                style={{
                  left: `${mousePosition.x}%`,
                  top: `${mousePosition.y}%`,
                }}
              >
                <CirclePlay strokeWidth={0.5} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className={styles.videoModal}
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className={styles.videoWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setIsVideoOpen(false)}
            >
              <X size={24} />
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/MsOaC61cR3U?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
