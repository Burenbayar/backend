import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const registerUserService = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
      role: data.role || 'user'
    }
  });
};

export const loginUserService = async (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};

export const updateUserService = async (id: number, data: any) => {
  return prisma.user.update({
    where: { id },
    data
  });
};

export const deleteUserService = async (id: number) => {
  return prisma.user.delete({ where: { id } });
};
