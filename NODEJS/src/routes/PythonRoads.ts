import {Router} from "express";
import {index, points} from "../controllers/PythonPolygonController.js";
import {find, insideMultiPolygon} from "../controllers/FrontController";
import {
    findByCoordinate,
    findByEndedBy, findByEndedByLocation,
    findByLocation,
    findByName,
    findByStartedBy,
    findByStartedByLocation
} from "../controllers/FilterPolygonController";

const PythonRoads = Router();

PythonRoads
    .get('/polygons', index)
    .get('/polygons/:id', find)
    .get('/is-in-polygon/:lat/:long', insideMultiPolygon)
    .get('/polygons/filter/:name', findByName)
    .get('/polygons/filter/startedBy/:name', findByStartedBy)
    .get('/polygons/filter/endedBy/:name', findByEndedBy)
    .get('/polygons/filter/:location', findByLocation)
    .get('/polygons/filter/startedBy/:location', findByStartedByLocation)
    .get('/polygons/filter/endedBy/:location', findByEndedByLocation)
    .get('/polygons/filter/:lat/:long', findByCoordinate)
    .post('/polygons', index)
    .post('/mark-points', points);

export default PythonRoads;