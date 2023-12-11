import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import { dbConnection } from "./config/dbConnect.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorHandler.js";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("common"));
app.use(cookieParser());

dbConnection();

app.use("/api/user", authRoutes);
app.use("/api/product", productRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => console.log("App listening on :", PORT));
