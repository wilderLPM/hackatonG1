import {Router} from "express";
import {index, points} from "../controllers/PythonPolygonController.js";

const PythonRoads = Router();

PythonRoads.post('/polygons', index)
    .post('/mark-points', points);

export default PythonRoads;