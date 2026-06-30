import jwt from "jsonwebtoken";
import env from "../config/env.js";

export interface JwtPayload {
  id: string;
}

export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, env.JWT_SECRET) as JwtPayload;
}