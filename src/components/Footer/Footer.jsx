import styles from "./Footer.module.css";

const footerLinks = [
  { name: "Pi Whitepaper", url: "#" },
  { name: "Privacy Policy", url: "#" },
  { name: "Support & FAQ", url: "#" },
  { name: "Developers Terms of Use", url: "#" },
  { name: "Terms of Service", url: "#" },
  { name: "Pi Trademark", url: "#" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Footer Links */}
        <div className={styles.links}>
          {footerLinks.map((link, index) => (
            <a key={index} href={link.url} className={styles.link}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Logo Section */}
        <div className={styles.logo}>
          <img
            src="https://www.coreteams.net/_next/image?url=%2Fimages%2Flogo%2FPi-Network.png&w=640&q=75"
            alt="Pi Network Logo"
            className={styles.logoImage}
          />
        </div>
      </div>
    </footer>
  );
}
