const nodemailer = require("nodemailer");
require("dotenv").config();

const sendReferralEmail = async (referrerName, refereeName, refereeEmail) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: refereeEmail,
      subject: "You’ve been referred!",
      text: `Hello ${refereeName},\n\n${referrerName} has referred you for an amazing course!`,
    });

    console.log("Referral email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email sending failed");
  }
};

module.exports = { sendReferralEmail };
