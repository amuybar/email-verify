import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_KEY || "";
export const supabase = createClient(supabaseUrl, supabaseKey);

export const saveVerificationCode = async (email: string, code: string) => {
  try {
    const { error } = await supabase
      .from("verifications")
      .insert([{ email, code }]);
    if (error) {
      throw new Error(`Error saving verification code: ${error.message}`);
    }
    console.log(`Verification code saved for ${email}: ${code}`);
  } catch (err) {
    console.error(`Failed to save verification code for ${email}:`, err);
  }
};

export const verifyCode = async (email: string, code: string) => {
  try {
    const { data, error } = await supabase
      .from("verifications")
      .select("id")
      .eq("email", email)
      .eq("code", code)
      .single();

    if (error) {
      throw new Error(`Error verifying code for ${email}: ${error.message}`);
    }

    const isValid = !!data;
    if (isValid) {
      console.log(`Verification code for ${email} is valid.`);
    } else {
      console.log(`Verification code for ${email} is invalid.`);
    }
    return isValid;
  } catch (err) {
    console.error(`Failed to verify code for ${email}:`, err);
    return false; // Return false in case of an error
  }
};
