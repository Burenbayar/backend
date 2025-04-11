import { Request, Response } from "express";
import { createRoomService, getRoomsService, updateRoomService, deleteRoomService } from "../services/roomService";
import prisma from "../database";

export const createRoom = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { title,description, price,guest ,bed ,items} = req.body;
    const room = await createRoomService( title, price,description,guest,bed,items);
    res.status(201).json(room);
    console.log(room);
  } catch (error) {
    res.status(500).json({ error: "Failed to create room" });
  }
};

export const getRoom = async (req: Request, res: Response) => {
  try {
    const rooms = await getRoomsService();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve rooms" });
  }
};

export const updateRoom = async (req: Request, res: Response) => {
  try {
    const { id, title, price ,  description,guest, bed, items} = req.body;
if (!id) {
  return res.status(400).json({ error: "Room ID is required" });
}
    const updatedRoom = await updateRoomService(
      id,
      title,
       price,
      description,
      guest,
      bed,
      items,
    );

    res.json(updatedRoom);
  } catch (error) {
    console.error("Update Room Error:", error); 
    res.status(500).json({ error: "Failed to update room" });
  }
};


export const deleteRoom = async (req: Request, res: Response) => {
  try {
   const {id} = req.body;
    await deleteRoomService(id);
    res.json({ message: "Room deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete room" });
  }
};
