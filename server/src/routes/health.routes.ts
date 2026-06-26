import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.status(200).json({
    status: "OK",
    message: "AkshEDI Backend Running",
  });
});

export default router;