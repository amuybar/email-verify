import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
  sendVerificationEmail,
  verifyEmailCode,
} from "./controllers/authController";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-code", sendVerificationEmail);
app.post("/verify-code", verifyEmailCode);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
