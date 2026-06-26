import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  res.json({
    message: "Login route",
  });
});

router.post("/register", (req, res) => {
  res.json({
    message: "Register route",
  });
});

router.get("/me", (req, res) => {
  res.json({
    message: "Current user route",
  });
});

export default router;