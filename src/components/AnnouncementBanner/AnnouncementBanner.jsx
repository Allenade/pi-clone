import { X } from "lucide-react";
import PropTypes from "prop-types";
import styles from "./AnnouncementBanner.module.css";

export default function AnnouncementBanner({ onClose }) {
  return (
    <div className={styles.banner}>
      <p className={styles.text}>
        Pi&apos;s newest Web3 social app &quot;Fireside Forum&quot; is available{" "}
        <span className={styles.highlight}>now</span>!
      </p>
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close announcement"
      >
        <X size={18} />
      </button>
    </div>
  );
}

// Prop validation
AnnouncementBanner.propTypes = {
  onClose: PropTypes.func.isRequired,
};
