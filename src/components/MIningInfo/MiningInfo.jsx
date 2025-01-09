import styles from "./MiningInfo.module.css";

const MiningInfo = () => {
  return (
    <section className={styles.miningInfo}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <span>Mining crypto is hard.</span>
            <span>Investing in crypto is risky.</span>
            <span className={styles.longText}>
              Too many of us are left out of the cryptocurrency revolution...
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MiningInfo;
