import { Router } from "express";
import { index } from "../controllers/FrontController.js";

const FrontRoads = Router();

FrontRoads.get('/polygon/:lat/:long', index); // Say if lat and long are inside multiple polygon
/* Front Python roads */
export default FrontRoads;