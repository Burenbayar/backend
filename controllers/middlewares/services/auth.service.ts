import prisma from "../database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (username: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return prisma.user.create({
        data: { username, password: hashedPassword }
    });
};

export const loginUser = async (username: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error("Invalid credentials");
    }
    return jwt.sign({ id: user.id }, "secret_key", { expiresIn: "1h" });
};