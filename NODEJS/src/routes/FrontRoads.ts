import { Router } from "express";
import { index, find, insideMultiPolygon } from "../controllers/FrontController.js";
import {findByName, findByStartedBy, findByEndedBy, findByCoordinate, findByLocation, findByStartedByLocation, findByEndedByLocation} from "../controllers/FilterPolygonController.js";

const FrontRoads = Router();


FrontRoads.get('/polygons', index)
    .get('/polygons/:id', find)
    .get('/is-in-polygon/:lat/:long', insideMultiPolygon)
    .get('/polygons/filter/:name', findByName)
    .get('/polygons/filter/startedBy/:name', findByStartedBy)
    .get('/polygons/filter/endedBy/:name', findByEndedBy)
    .get('/polygons/filter/:location', findByLocation)
    .get('/polygons/filter/startedBy/:location', findByStartedByLocation)
    .get('/polygons/filter/endedBy/:location', findByEndedByLocation)
    .get('/polygons/filter/:lat/:long', findByCoordinate);

export default FrontRoads;