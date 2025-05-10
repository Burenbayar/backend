import express from 'express';
import { makeBooking } from '../controllers/booking.controller';

const router = express.Router();

router.post('/:id', makeBooking);

export default router;
