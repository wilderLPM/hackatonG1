import polygonData from '../data/polygons-data.json' assert {type: "json"};
import { inMultiPolygon } from "../utils/useLatLong.js";

export const index = (_req: any, res: any) => {
    res.json({data: polygonData.polygons, status: res.statusCode});
}
export const find = (req: any, res: any) => res.json({data: inMultiPolygon(req), status: res.statusCode});