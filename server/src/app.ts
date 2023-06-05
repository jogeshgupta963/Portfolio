import express from "express";
import cors from "cors";
import { router as profileRouter } from "./route/profile";
export const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/", profileRouter);
