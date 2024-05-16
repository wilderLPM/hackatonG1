import { Router } from "express";
import { index } from "../controllers/PolygonController.js";

const PolygonRoads = Router();

PolygonRoads.get('/inside-polygon/:lat/:long', index);
export default PolygonRoads;