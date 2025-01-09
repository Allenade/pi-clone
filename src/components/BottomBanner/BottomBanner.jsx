import styles from "./BottomBanner.module.css";

export default function BottomBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p className={styles.text}>
          Pi Network
          <span className={styles.subtext}>Start Mining. Easy as Pi.</span>
        </p>
        <button className={styles.downloadButton}>Download Now</button>
      </div>
    </div>
  );
}
