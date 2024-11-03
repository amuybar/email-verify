import { Request, Response } from "express";
import transporter from "../config/email";
import { saveVerificationCode, verifyCode } from "../services/supabaseService";
// 
const generateCode = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendVerificationEmail = async (req: Request, res: Response) => {
  const { email } = req.body;
  const code = generateCode();

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Verification Code",
      text: `Your verification code is: ${code}`,
    });

    await saveVerificationCode(email, code);
    res.status(200).json({ message: "Verification email sent." });
  } catch (error) {
    res.status(500).json({ error: "Failed to send verification email.",ERROR:error });
  }
};

export const verifyEmailCode = async (req: Request, res: Response) => {
    const { email, code } = req.body;
  const isValid = await verifyCode(email, code);
  if (isValid) {
    res.status(200).json({ message: "Verification successful!" });
  } else {
    res.status(400).json({ error: "Invalid code or email." });
  }
};
