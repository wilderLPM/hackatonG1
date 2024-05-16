import { Router } from "express";
import { index } from "../controllers/AppController.js";

const AppRoads = Router();

AppRoads.get('/cities', index);
export default AppRoads;