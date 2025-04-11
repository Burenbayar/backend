import express from "express";
import productRoutes from "./roomRoute";
import userRoutes from "./userRoute";

const router = express.Router();

router.use("/rooms", productRoutes);
router.use("/users", userRoutes);

export default router;
