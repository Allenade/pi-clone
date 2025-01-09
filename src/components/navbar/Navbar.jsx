import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import navItems from "../../data/navitem.json";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import PropTypes from "prop-types";

const Navbar = ({ isAnnouncementVisible, isBannerVisible }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 70;
      const isScrolledNow = window.scrollY > scrollThreshold;
      console.log("Scrolled:", window.scrollY, "Is Scrolled:", isScrolledNow);
      setIsScrolled(isScrolledNow);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);
  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
        isAnnouncementVisible ? "" : styles.headerNoAnnouncement
      } ${isBannerVisible ? styles.headerWithBanner : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="https://www.coreteams.net/_next/image?url=%2Fimages%2Flogo%2FPi-Network.png&w=640&q=75"
            alt="pi"
            className={styles.logoImage}
          />
        </div>
        {/* desktop navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navlist}>
            {navItems.map((item, index) => (
              <li
                key={item.title}
                className={styles.navItem}
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(index)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={styles.navButton}>
                  {item.title}{" "}
                  {item.hasDropdown && (
                    <ChevronDown className={styles.Chevron} />
                  )}
                </button>
                {item.hasDropdown && activeDropdown === index && (
                  <div className={styles.dropdown}>
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem}
                        href="#"
                        className={styles.dropdownItem}
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* social icons */}
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon}>
            <Twitter color="#fff" strokeWidth={1.5} />{" "}
          </a>
          <a href="#" className={styles.socialIcon}>
            <Facebook color="#fff" strokeWidth={1.5} />{" "}
          </a>
          <a href="#" className={styles.socialIcon}>
            <Youtube color="#fff" strokeWidth={1.5} />
          </a>
          <a href="#" className={styles.socialIcon}>
            <Instagram color="#fff" />
          </a>
        </div>
        {/* {mobile menu button} */}

        <button
          className={`${styles.mobileMenuButton} ${
            isMobileMenuOpen ? styles.isActive : ""
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={styles.hamburgerIcon}></span>
        </button>
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenuOverlay}>
            <nav className={styles.mobileNav}>
              <ul className={styles.mobileNavList}>
                {navItems.map((item, index) => (
                  <li
                    key={item.title}
                    className={styles.mobileNavItem}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onMouseEnter={() =>
                      item.hasDropdown && setActiveDropdown(index)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className={styles.mobileNavButton}>
                      {item.title}
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`${styles.chevron} ${
                            activeDropdown === index ? styles.chevronRotate : ""
                          }`}
                        />
                      )}
                    </button>
                    {item.hasDropdown && activeDropdown === index && (
                      <div className={styles.mobileDropdown}>
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem}
                            href="#"
                            className={styles.mobileDropdownItem}
                          >
                            {dropdownItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              {/* Mobile Social Icons */}
              <div className={styles.mobileSocialIcons}>
                <a href="#" className={styles.mobileSocialIcon}>
                  <Twitter color="white" strokeWidth={1.5} />
                </a>
                <a href="#" className={styles.mobileSocialIcon}>
                  <Facebook color="white" strokeWidth={1.5} />
                </a>
                <a href="#" className={styles.mobileSocialIcon}>
                  <Youtube color="white" strokeWidth={1.5} />
                </a>
                <a href="#" className={styles.mobileSocialIcon}>
                  <Instagram color="white" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

Navbar.propTypes = {
  isAnnouncementVisible: PropTypes.bool,
  isBannerVisible: PropTypes.bool,
};

export default Navbar;
