import {isInMultiPolygone} from "../services/Polygon.js";

export const useLatLong = (req: any) => { const {lat, long} = req.params; return {lat, long} };
const useGetPolygon = () => [
    [[-122.08, 37.42], [-122.03, 37.42], [-122.03, 37.38], [-122.08, 37.38]],
    [[-122.10, 37.40], [-122.05, 37.40], [-122.05, 37.36], [-122.10, 37.36]]
];

export const inMultiPolygon = (req: any) => {
    const {lat, long} = useLatLong(req);
    return isInMultiPolygone(lat, long, useGetPolygon())
}