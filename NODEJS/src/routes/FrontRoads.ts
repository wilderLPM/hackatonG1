import { Router } from "express";
import { index, find, insideMultiPolygon } from "../controllers/FrontController.js";
import {findByName, findByStartedBy, findByEndedBy, findByCoordinate, findByLocation, findByStartedByLocation, findByEndedByLocation} from "../controllers/FilterPolygonController.js";
import {authenticationMiddleWare} from "../middlewares/AuthenticationMiddleWare";
import {authenticated} from "../controllers/AuthenticatedController.js";

const FrontRoads = Router();


FrontRoads.post('/signup', authenticated)
    .get('/polygons', authenticationMiddleWare, index)
    .get('/polygons/:id', authenticationMiddleWare, find)
    .get('/is-in-polygon/:lat/:long', authenticationMiddleWare, insideMultiPolygon)
    .get('/polygons/filter/:name', authenticationMiddleWare, findByName)
    .get('/polygons/filter/startedBy/:name', authenticationMiddleWare, findByStartedBy)
    .get('/polygons/filter/endedBy/:name', authenticationMiddleWare, findByEndedBy)
    .get('/polygons/filter/:location', authenticationMiddleWare, findByLocation)
    .get('/polygons/filter/startedBy/:location', authenticationMiddleWare, findByStartedByLocation)
    .get('/polygons/filter/endedBy/:location', authenticationMiddleWare, findByEndedByLocation)
    .get('/polygons/filter/:lat/:long', authenticationMiddleWare, findByCoordinate);

export default FrontRoads;