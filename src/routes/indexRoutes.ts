import express from "express";
import productRoutes from "./productRoute";
import userRoutes from "./userRoute";

const router = express.Router();

router.use("/products", productRoutes);
router.use("/users", userRoutes);

export default router;
