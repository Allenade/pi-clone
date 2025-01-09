import styles from "./Download.module.css";

const Download = () => {
  return (
    <section className={styles.Download}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img
            src="https://www.coreteams.net/_next/image?url=%2Fimages%2F34-14-11-1024-%C3%97-1024-px-1-1.webp&w=3840&q=75"
            alt="download"
          />
        </div>
        <div className={styles.Downloadapp}>
          <h2 className={styles.Downloadtext}>
            Download the mobile <br /> app to start mining <br /> today! Join
            now.
          </h2>
          <p className={styles.description}>
            Keep your money! Mining Pi is free. All you need is an <br />
            invitation from an existing trusted member on the <br /> network. If
            you have an invitation you can download <br /> the mobile app below.
          </p>
          <div className={styles.Appcontainer}>
            <div className={styles.Playstore}>
              <img
                src="https://www.coreteams.net/_next/image?url=%2Fimages%2Fgoogle_play.png&w=384&q=75"
                alt="Play store"
              />
            </div>
            <div className={styles.Appstore}>
              <img
                src="https://www.coreteams.net/_next/image?url=%2Fimages%2Fapple_store.png&w=384&q=75"
                alt="Apple store"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
