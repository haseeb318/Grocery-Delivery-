import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/prisma.js";

export const admin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: "unauthorized" });
    }
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    const adminEmail = process.env.ADMIN_EMAILS
      ? process.env.ADMIN_EMAILS.split(",").map((e) => e.trim().toLowerCase())
      : [];
    if (adminEmail.includes(user.email.toLowerCase())) {
      if (req.user) req.user.isAdmin = true;
      next();
    } else {
      res.status(403).json({ message: "User not found" });
    }
  } catch (error: any) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Admin Verification failed", error: error.massage });
  }
};
