import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {
  registerUserService,
  loginUserService,
  updateUserService,
  deleteUserService
} from '../services/user.service';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await registerUserService(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await loginUserService(email);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Incorrect password' });

  const token = jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  );

  res.json({ token });
};

export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = await updateUserService(id, req.body);
  res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await deleteUserService(id);
  res.json({ message: 'User deleted' });
};

