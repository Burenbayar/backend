import * as dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY as string;
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Authorization Header:", req.headers.authorization); 

    const authHeader = req.headers.authorization;
    if (!authHeader) {
        console.log(" No Authorization header found!");
        return res.status(401).json({ message: "Access Denied: No Token Provided" });
    }

    const token = authHeader.split(" ")[1]?.trim();
    console.log("Extracted Token:", token); 

    if (!token) {
        console.log(" No token extracted!");
        return res.status(401).json({ message: "Invalid Token Format" });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            console.log(" JWT verification failed:", err.message);
            return res.status(403).json({ message: "Invalid or Expired Token" });
        }
        console.log("Token Verified! User:", decoded);
        (req as any).user = decoded;
        next();
    });
};

