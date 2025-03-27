import prisma from "../database";

export const createProduct = async (name: string, price: number) => {
    return prisma.product.create({ data: { name, price } });
};

export const getAllProducts = async () => {
    return prisma.product.findMany();
};

export const updateProduct = async (id: number, name: string, price: number) => {
    return prisma.product.update({ where: { id }, data: { name, price } });
};

export const deleteProduct = async (id: number) => {
    return prisma.product.delete({ where: { id } });
};
