
import express from "express";

import travelRoutes from "./travel.routes"
import userRoutes from "./user.routes"
import bookingRoutes from "./booking.routes"


const router = express.Router();

router.use("/users", userRoutes);
router.use("/travels", travelRoutes);
router.use("/bookings",bookingRoutes)

export default router;
