import express, { Request, Response, NextFunction } from "express";
import { createRoom, getRoom, updateRoom, deleteRoom } from "../controllers/roomController";
import { authenticateJWT } from "../middlewares/tokenMiddleware";

const router = express.Router();

const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
	Promise.resolve(fn(req, res, next)).catch(next);
};

router.post("/", authenticateJWT, asyncHandler(createRoom));
router.get("/", asyncHandler(getRoom));

router.put("/", authenticateJWT, asyncHandler(updateRoom));
router.delete("/delete", asyncHandler(deleteRoom));

export default router;
