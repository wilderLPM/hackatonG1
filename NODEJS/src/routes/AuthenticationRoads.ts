import {Router} from "express";
import { authenticated } from '../controllers/AuthenticatedController.js';

const AuthenticationRoads = Router();

AuthenticationRoads.post('/signup', authenticated);

export default AuthenticationRoads;