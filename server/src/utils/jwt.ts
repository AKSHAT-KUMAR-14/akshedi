import jwt, { SignOptions } from "jsonwebtoken";
import env from "../config/env.js";

export function generateToken(id: string) {
  const options: SignOptions = {
    expiresIn: env.JWT_EXPIRES_IN as SignOptions["expiresIn"],
  };

  return jwt.sign({ id }, env.JWT_SECRET, options);
}