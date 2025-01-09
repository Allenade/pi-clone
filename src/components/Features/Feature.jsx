import { useEffect, useRef } from "react";
import styles from "./Feature.module.css";

const features = [
  {
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="28" stroke="#8A2BE2" strokeWidth="2" />
        <circle cx="32" cy="32" r="20" stroke="#8A2BE2" strokeWidth="2" />
        <circle cx="32" cy="32" r="12" stroke="#8A2BE2" strokeWidth="2" />
        <circle cx="32" cy="32" r="4" fill="#8A2BE2" />
      </svg>
    ),
    title: "Decentralized",
    description:
      "Secure, immutable, non-counterfeitable and interoperable digital money.",
  },
  {
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="16"
          y="8"
          width="32"
          height="48"
          rx="4"
          stroke="#8A2BE2"
          strokeWidth="2"
        />
        <rect
          x="22"
          y="14"
          width="20"
          height="30"
          rx="2"
          stroke="#8A2BE2"
          strokeWidth="2"
        />
        <circle cx="32" cy="50" r="2" fill="#8A2BE2" />
      </svg>
    ),
    title: "Mobile First",
    description: "Works on your mobile phone and does not drain your battery.",
  },
  {
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="28" stroke="#8A2BE2" strokeWidth="2" />
        <path
          d="M32 4C18.7452 4 8 14.7452 8 28C8 41.2548 18.7452 52 32 52"
          stroke="#8A2BE2"
          strokeWidth="2"
        />
        <path
          d="M32 60C45.2548 60 56 49.2548 56 36C56 22.7452 45.2548 12 32 12"
          stroke="#8A2BE2"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "User & Planet Friendly",
    description:
      "Easy to use, secure at scale, without the massive electrical waste.",
  },
];

const Features = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles["is-visible"]);
          } else {
            entry.target.classList.remove(styles["is-visible"]); // Remove class when out of view
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" } // Adjusted threshold and root margin
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.features}>
      <div className={styles.container}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={styles["feature-card"]}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className={styles["feature-icon"]}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
