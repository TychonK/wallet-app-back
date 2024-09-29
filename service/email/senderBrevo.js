const brevo = require("sib-api-v3-sdk");

let defaultClient = brevo.ApiClient.instance;

class SenderBrevo {
  constructor() {
    let apiKey = defaultClient.authentications["api-key"];
    apiKey.apiKey = process.env.VEMAIL_SERVICE_API_KEY; // Use API key from .env
    this.apiInstance = new brevo.TransactionalEmailsApi();
  }

  async send(msg) {
    // Set up the email content and parameters
    let sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.subject = msg.subject || "Default Subject"; // Fallback subject if none is provided
    sendSmtpEmail.htmlContent = msg.html; // HTML content for the email
    sendSmtpEmail.sender = {
      name: "Wallet App", // Sender name
      email: process.env.SENDER_BREVO, // Sender email from .env
    };
    sendSmtpEmail.to = [{ email: msg.to }]; // Recipient's email
    sendSmtpEmail.replyTo = {
      email: process.env.SENDER_BREVO, // Reply-to email (same as sender in this case)
      name: "Wallet App",
    };

    // Send the transactional email
    try {
      const result = await this.apiInstance.sendTransacEmail(sendSmtpEmail); // Send email via Brevo API
      console.log("Email sent successfully:", JSON.stringify(result)); // Log successful send
      return result;
    } catch (error) {
      // Log detailed error information for debugging
      console.error(
        "Error sending email:",
        error.response ? error.response.body : error.message
      );
      throw new Error("Email sending failed");
    }
  }
}

module.exports = SenderBrevo;
