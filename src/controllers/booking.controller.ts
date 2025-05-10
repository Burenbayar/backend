import { Request, Response } from 'express';
import { createBooking } from '../services/booking.service';

export const makeBooking = async (req: Request, res: Response) => {
  const { user_email,  } = req.body;
  const travel_id = parseInt(req.params.id);

  if (!user_email || !travel_id) {
    return res.status(400).json({ message: 'Email болон travel ID шаардлагатай' });
  }

  try {
    const booking = await createBooking(user_email, travel_id);
    res.status(201).json({ message: 'Захиалга амжилттай', booking });
  } catch (err) {
    res.status(500).json({ message: 'Захиалга амжилтгүй', error: err });
    console.log(err);
  }
};
