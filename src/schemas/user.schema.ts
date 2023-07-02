import joi, { Schema } from "joi";
import { UserSignUp } from "@/protocols/protocols";

export const signUp: Schema<UserSignUp> = joi.object({
  name: joi.string().trim().min(3).required(),
  email: joi.string().trim().email().required(),
  password: joi.string().trim().min(3).required(),
});

export const signIn: Schema<Omit<UserSignUp, "name">> = joi.object({
  email: joi.string().trim().email().required(),
  password: joi.string().trim().required(),
});