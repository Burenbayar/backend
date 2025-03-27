import prisma from "../database";

export const createProductService = async ( name: string, price: number) => {
  return prisma.product.create({
    data: {
      name,
      price
    },
  });
};

export const getProductsService = async () => {
  return prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
    },
  });
};


export const updateProductService = async (id: string, name: string, price: number) => {
  return prisma.product.update({
    where: { id },
    data: { name, price },
  });
};

export const deleteProductService = async (id: string) => {
  return prisma.product.delete({
    where: { id },
  });
};
