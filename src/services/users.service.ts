import * as userRepository from "../repositories/users.repository";
import bcrypt from "bcrypt";
import { SignUpData } from "../protocols/protocols";

export async function signUp(data: SignUpData): Promise<void> {
  const { name, email, password } = data;
  const hashedPassword = await bcrypt.hash(password, 10);
  await userRepository.createUser({ name, email, password: hashedPassword });
}