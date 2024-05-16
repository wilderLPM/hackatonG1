import { Router } from "express";
import FrontRoads from "./FrontRoads";
import PythonRoads from "./PythonRoads";

const AppRoads = Router();

AppRoads.use('/react', FrontRoads)
AppRoads.use('/python', PythonRoads);
export default AppRoads;