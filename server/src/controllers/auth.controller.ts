import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  res.json({
    message: "Login Controller",
  });
};

export const register = (req: Request, res: Response) => {
  res.json({
    message: "Register Controller",
  });
};

export const me = (req: Request, res: Response) => {
  res.json({
    message: "Current User Controller",
  });
};