import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  console.log(req.headers["authorization"]);

  if (!token) {
    res.status(403).json({ message: "Token baihgui bn" });
    return;
  }

  jwt.verify(token,JWT_SECRET , (err, decoded: any) => {
    if (err) {
      res.status(403).json({ message: "Invalid token" });
      return;
    }
    console.log(decoded);
    (req as any).user = decoded;  
    next();
  });
};
