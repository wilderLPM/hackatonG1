import { Router } from "express";
import FrontRoads from "./FrontRoads.js";
import PythonRoads from "./PythonRoads.js";
import { authenticationMiddleWare } from "../middlewares/AuthenticationMiddleWare.js";

const AppRoads = Router();

AppRoads.use('/react', authenticationMiddleWare, FrontRoads)
AppRoads.use('/python', PythonRoads);
export default AppRoads;