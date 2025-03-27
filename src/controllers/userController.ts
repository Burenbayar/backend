import { Request, Response } from "express";
import { registerUserService, loginUserService, getUserProfileService } from "../services/userService";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { password, username } = req.body;

    // Оролтын өгөгдөл шалгах
    if (!password || !username) {
      return res.status(400).json({ error: "Name and password are required" });
    }

    const user = await registerUserService(password, username);
    
    res.status(201).json(user);
  } catch (error: any) {
    console.error("Error registering user:", error);
    res.status(500).json({
      error: error.message || "Failed to register user",
    });
  }
}

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const token = await loginUserService(username, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: "nevtrehed aldaa garlaa", error });
  }
};

interface AuthRequest extends Request {
  user?: { id: string };
}

export const getUserProfile = async (req: AuthRequest, res: Response) => {
  try {
    const user = await getUserProfileService(req.user?.id as string);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
};
