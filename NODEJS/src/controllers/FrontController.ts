import { inMultiPolygon } from "../utils/useLatLong.js";

export const index = (req: any, res: any) => res.json({data: inMultiPolygon(req), status: res.statusCode});