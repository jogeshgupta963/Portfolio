import express from "express";
import { getProfile } from "../controller/profile";

export const router: express.Router = express.Router();

router.route("/profile").get(getProfile);
