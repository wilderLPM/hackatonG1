import { Router } from "express";
import { index, find } from "../controllers/FrontController.js";

const FrontRoads = Router();


// Roads for get polygons datas
FrontRoads.get('/polygons', index)

// Say if lat and long are inside multiple polygon
FrontRoads.get('/polygon/:lat/:long', find);

// Roads for get points datas

export default FrontRoads;