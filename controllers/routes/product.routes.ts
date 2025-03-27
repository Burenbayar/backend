import express from "express";
import { addProduct, getProducts, editProduct, removeProduct } from "../product.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/add", authMiddleware, addProduct);
router.get("/", getProducts);
router.put("/jwt", authMiddleware, editProduct);
router.delete("/jwt", removeProduct);

export default router;
