import prisma from "../database";

export const createRoomService = async ( title: string ,price: number, description:string ,guest:number,bed:number, items:Object) => {
  return prisma.room.create({
    data: {
      title,
      description,
      guest,
      bed,
      items,
      price
    },
  });
};

export const getRoomsService = async () => {
  return prisma.room.findMany({
    select: {
      id: true,
      title: true,
      description:true,
      guest:true,
      bed:true,
      price: true,
    },
  });
};


export const updateRoomService = async (id: number, title: string,price: number,description:string, guest:number,bed:number,items:Object) => {
  return prisma.room.update({
    where: { id },
    data: { title,description,guest,bed,items, price },
  });
};

export const deleteRoomService = async (id: number) => {
  return prisma.room.delete({
    where: { id },
  });
};
