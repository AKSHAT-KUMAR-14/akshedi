import { Response, NextFunction } from "express";
import { AuthRequest } from "../types/auth.js";
import prisma from "../config/prisma.js";
import { Role } from "@prisma/client";

export function authorize(...roles: Role[]) {
  return async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    if (!user.isActive) {
        return res.status(403).json({
            success: false,
            message: "Account has been disabled",
        });
    }

    if (!roles.includes(user.role)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden",
      });
    }

    next();
  };
}