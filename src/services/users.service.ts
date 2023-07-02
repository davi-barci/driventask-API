import * as userRepository from "../repositories/users.repository";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import * as errors from "../errors/index.errors";
import { UserSignUp, User } from "../protocols/protocols";

export async function signUp(data: UserSignUp): Promise<void> {
  const { name, email, password } = data;
  const hashedPassword = await bcrypt.hash(password, 10);
  await userRepository.createUser({ name, email, password: hashedPassword });
}

export async function signIn({ email, password }: { email: string, password: string }): Promise<{ token: string }> {
  const foundUser: User | null = await userRepository.findUserByEmail(email);
  if (!foundUser) {
    throw errors.unauthorized();
  }

  const isValidPassword: boolean = await bcrypt.compare(password, foundUser.password);
  if (!isValidPassword) {
    throw errors.unauthorized();
  }

  const token: string = uuid();
  const sessionCreated: boolean = await userRepository.createSession(foundUser.id, token);
  if (sessionCreated) {
    return { token };
  } else {
    throw errors.unauthorized();
  }
}






