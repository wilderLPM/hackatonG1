import { Router } from "express";
import { index } from "../controllers/FrontController";

const FrontRoads = Router();

FrontRoads.get('/polygon/:lat/:long', index); // Say if lat and long is inside multiple polygon
/* Front Python roads */
export default FrontRoads;