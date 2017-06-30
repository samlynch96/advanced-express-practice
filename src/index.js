import express from "express";
import ContactRoutes from "./routes/ContactRoutes";
import CommentRoutes from "./routes/CommentRoutes";
import VehicleRoutes from "./routes/VehicleRoutes";
import ProductRoutes from "./routes/ProductRoutes";
import bodyParser from "body-parser";
import mongoose from "mongoose";


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/address-book");

const app = express();
app.use(bodyParser.json());
app.use(ContactRoutes);
app.use(VehicleRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
