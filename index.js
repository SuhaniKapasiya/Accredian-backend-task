require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const { validations } = require("./middleware/validations");
const { sendReferralEmail } = require("./utils/sendReferralEmail ");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// API to handle referrals

app.post("/api/refer", validations, async (req, res) => {
  try {
    const { referrerName, referrerEmail, refereeName, refereeEmail } = req.body;

    // Create new referral
    const newReferral = await prisma.referral.create({
      data: { referrerName, referrerEmail, refereeName, refereeEmail },
    });

    // Send Email Notification
    await sendReferralEmail(referrerName, refereeName, refereeEmail);

    res
      .status(201)
      .json({ message: "Referral submitted successfully", newReferral });
  } catch (error) {
    console.error("Error in /api/refer:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
