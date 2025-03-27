import express, { Request, Response, NextFunction } from "express";
import { createProduct, getProduct, updateProduct, deleteProduct } from "../controllers/productController";
import { authenticateJWT } from "../middlewares/tokenMiddleware";

const router = express.Router();

const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
	Promise.resolve(fn(req, res, next)).catch(next);
};

router.post("/", authenticateJWT, asyncHandler(createProduct));
router.get("/", asyncHandler(getProduct));

router.put("/:id", authenticateJWT, asyncHandler(updateProduct));
router.delete("/:id", asyncHandler(deleteProduct));

export default router;
