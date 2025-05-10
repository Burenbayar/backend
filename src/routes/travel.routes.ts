import express from 'express';
import {
  createTravel,
  getAllTravels,
  getTravelById,
  updateTravel,
  deleteTravel
} from '../controllers/travel.controller';
import { authenticateToken } from '../middlewares/auth.middleware';
import { isAdmin } from '../middlewares/isAdmin.middleware';

const router = express.Router();

router.post('/', authenticateToken,isAdmin, createTravel);
router.get('/', getAllTravels);
router.get('/:id', getTravelById);
router.put('/:id', authenticateToken, isAdmin,updateTravel);
router.delete('/:id', authenticateToken, isAdmin,deleteTravel);

export default router;
