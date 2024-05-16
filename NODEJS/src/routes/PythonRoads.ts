import {Router} from "express";
import {index, points} from "../controllers/PythonPolygonController.js";

const PythonRoads = Router();

PythonRoads.post('/polygon', index);
PythonRoads.post('/mark-points', points);

export default PythonRoads;