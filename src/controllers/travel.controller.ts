import { Request, Response } from 'express';
import {
  createTravelService,
  getAllTravelsService,
  getTravelByIdService,
  updateTravelService,
  deleteTravelService
} from '../services/travel.service';

export const createTravel = async (req: Request, res: Response) => {
  try {
    const travel = await createTravelService(req.body);
    res.status(201).json(
     { data:travel,
      message:"Travel created successfully."
     }
    );
  } catch (err) {
    res.status(500).json({ message: 'Failed to create travel', error: err });
    console.log(err);
  }
};

export const getAllTravels = async (_req: Request, res: Response) => {
  const travels = await getAllTravelsService();
  res.json(travels);
};

export const getTravelById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const travel = await getTravelByIdService(id);
  if (!travel) return res.status(404).json({ message: 'Travel not found' });
  res.json(travel);
};

export const updateTravel = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const travel = await updateTravelService(id, req.body);
  res.json({data:travel,
    message:"Travel updated successfully"
  });
};

export const deleteTravel = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await deleteTravelService(id);
  res.json({ message: 'Travel deleted successfully' });
};
