import { Request, Response } from "express";
import { registerUserService, loginUserService, getUserProfileService } from "../../src/services/userService";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    const user = await registerUserService(email, password, name);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const token = await loginUserService(name, email, password);
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
