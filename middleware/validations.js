const validator = require("validator");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const validations = async (req, res, next) => {
  try {
    const { referrerName, referrerEmail, refereeName, refereeEmail } = req.body;

    // Validate name length
    if (
      referrerName.length < 3 ||
      referrerName.length > 50 ||
      refereeName.length < 3 ||
      refereeName.length > 50
    ) {
      return res
        .status(400)
        .json({ error: "Names must be between 3 to 50 characters." });
    }

    // Validate emails using `validator`
    if (!validator.isEmail(referrerEmail) || !validator.isEmail(refereeEmail)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    // Ensure the same `refereeEmail` is not referred twice
    const existingReferral = await prisma.referral.findFirst({
      where: { refereeEmail },
    });

    if (existingReferral) {
      return res
        .status(400)
        .json({ error: "This user has already been referred!" });
    }

    // Proceed to the next middleware if validation passes
    next();
  } catch (error) {
    console.error("Validation Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { validations };
