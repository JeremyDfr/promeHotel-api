import express from "express";
import { router as hotelRoutes } from "./routes/hotel.js";

const app = express();

// Routes
app.use("/hotels", hotelRoutes);

app.listen(3000, () => {
    console.log('API listening on 3000');
});