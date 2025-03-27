import prisma from "../database";
import {  hashPassword, comparePasswords } from "../utils/encrypt";
import { generateToken } from "../utils/jwt";


export const registerUserService = async (password: string, username: string) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { username}, 
    });

    if (existingUser) {
      throw new Error("Username is already taken");
    }

    const encryptPassword = hashPassword(password);

    return await prisma.user.create({
      data: { username, password: encryptPassword },
    });
  } catch (error) {
    console.error("Error in registerUserService:", error);
    throw new Error(error.message || "User registration failed");
  }
};


export const loginUserService = async (username: string, password: string) => {
  const user = await prisma.user.findFirst({ where: { username } });

  console.log("User data:", user);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid = comparePasswords(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }
  console.log(isPasswordValid)
  const token = generateToken(user.id);
  console.log("Generated token:", token);
  return token;
};


export const getUserProfileService = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};
