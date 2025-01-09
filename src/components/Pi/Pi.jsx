import { useState, useEffect } from "react";
import styles from "./Pi.module.css";

const Pi = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // Set initial window height
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.pi}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src="https://www.coreteams.net/_next/image?url=%2Fimages%2F001-3.webp&w=1920&q=75"
            alt="Pi Network App"
            className={styles.phoneImage}
          />
          <img
            src="https://www.coreteams.net/_next/image?url=%2Fimages%2F256-1.webp&w=3840&q=75"
            alt="Pi Network Overlay"
            className={styles.overlayImage}
            style={{
              transform: `translateY(${Math.max(
                0,
                120 - scrollPosition / 10
              )}%)`,
              opacity:
                scrollPosition > windowHeight
                  ? Math.min(1, (scrollPosition - windowHeight) / 300)
                  : 0, // Only show after scrolling past the bottom
              transition: "opacity 0.5s ease-out, transform 0.3s ease-out",
            }}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Pi makes crypto <br /> mining easy.
          </h2>
          <p className={styles.description}>
            Breakthrough tech allows you to mine <br /> Pi on your phone without
            draining your <br /> battery.
          </p>
          <button className={styles.PiButton}>
            Learn the Tech Behind Pi <span className={styles.arrowIcon}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pi;
