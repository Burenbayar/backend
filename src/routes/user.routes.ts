import express from 'express';
import {
  registerUser,
  loginUser,
  updateUser,
  deleteUser
} from '../controllers/user.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.put('/users/:id', authenticateToken, updateUser);
router.delete('/users/:id', authenticateToken, deleteUser);

export default router;
