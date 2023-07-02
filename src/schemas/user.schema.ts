import joi, { Schema } from "joi";
import { SignUpData } from "../protocols/protocols";

export const signUp: Schema<SignUpData> = joi.object({
  name: joi.string().trim().min(3).required(),
  email: joi.string().trim().email().required(),
  password: joi.string().trim().min(3).required(),
});