import { Router } from "express";
import { index } from "../controllers/FrontController.js";

const FrontRoads = Router();

// Say if lat and long are inside multiple polygon
FrontRoads.get('/polygon/:lat/:long', index);

// Roads for get python datas

export default FrontRoads;