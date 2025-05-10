import { PrismaClient } from '@prisma/client';
import prisma from '../database';

export const createTravelService = async (data: any) => {
  return prisma.travel.create({
    data: {
      title: data.title,
      image: data.image,
      rank: data.rank,
      description: data.description,
      price: data.price,
      guide: data.guide,
      day: data.day,
      startDate: data.startDate,
      Schedule: {
        create: data.schedule
      }
    },
    include: { Schedule: true }
  });
};

export const getAllTravelsService = async () => {
  return prisma.travel.findMany({
    include: { Schedule: true }
  });
};

export const getTravelByIdService = async (id: number) => {
  return prisma.travel.findUnique({
    where: { travel_id: id },
    include: { Schedule: true }
  });
};

export const updateTravelService = async (id: number, data: any) => {
  const { schedule, ...travelData } = data;

  // Update Travel
  const updatedTravel = await prisma.travel.update({
    where: { travel_id: id }, data: travelData,
  });

  // Update related Schedule if provided
  if (schedule) {
    await prisma.schedule.updateMany({
      where: { travel_id: id },
      data: {
        d1: schedule.d1,
        d2: schedule.d2,
        d3: schedule.d3,
        d4: schedule.d4,
        d5: schedule.d5,
        d6: schedule.d6,
        d7: schedule.d7,
      },
    });
  }
  return prisma.travel.findUnique({
    where: { travel_id: id },
    include: { Schedule: true },
  });
};

export const deleteTravelService = async (id: number) => {
  await prisma.schedule.deleteMany({ where: { travel_id: id } });
  return prisma.travel.delete({ where: { travel_id: id } });
};

