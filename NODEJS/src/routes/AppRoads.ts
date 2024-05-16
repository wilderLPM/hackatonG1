import { Router } from "express";
import FrontRoads from "./FrontRoads.js";
import PythonRoads from "./PythonRoads.js";

const AppRoads = Router();

AppRoads.use('/react', FrontRoads)
AppRoads.use('/python', PythonRoads);
export default AppRoads;