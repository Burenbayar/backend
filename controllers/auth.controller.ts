import { Request, Response } from "express";
import { registerUser, loginUser } from "../src/services/auth.service";

export const register = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await registerUser(username, password);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error registering user" });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const token = await loginUser(username, password);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
