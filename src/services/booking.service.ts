import { PrismaClient } from '@prisma/client';
import { sendBookingEmail } from '../utils/email';
import prisma from '../database';

export const createBooking = async (user_email: string, travel_id: number) => {
  const booking = await prisma.booking.create({
    data: { user_email, travel_id },
  });

  return booking;
};
