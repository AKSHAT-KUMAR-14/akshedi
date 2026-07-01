import { Router } from "express";
import { login, me, register } from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/authorize.middleware.js";
import { Role } from "@prisma/client";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.get(
  "/me",
  authenticate,
  authorize(Role.HR_ADMIN),
  me
);

export default router;