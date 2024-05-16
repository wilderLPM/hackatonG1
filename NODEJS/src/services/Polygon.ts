const rayonTraverseSegment = (lon: number, lat: number, x1: number, y1: number, x2: number, y2: number) => {
    if (x1 === x2) {
        return y1 <= lat && lat <= y2;
    } else {
        const a = (lat - y1) / (x2 - x1);
        const b = y1 - a * x1;
        const xIntersection = lon;
        const yIntersection = a * xIntersection + b;
        return xIntersection >= Math.min(x1, x2) && xIntersection <= Math.max(x1, x2) &&
            yIntersection >= Math.min(y1, y2) && yIntersection <= Math.max(y1, y2);
    }
}

const isInPolygone = (polygone: any, latitude: number, longitude: number) => {
    let nombreIntersections = 0;
    let dernierPoint = polygone[polygone.length - 1];
    for (let i = 0; i < polygone.length; i++) {
        const point = polygone[i];
        const [lon1, lat1] = dernierPoint;
        const [lon2, lat2] = point;
        if (rayonTraverseSegment(longitude, latitude, lon1, lat1, lon2, lat2)) {
            nombreIntersections++;
        }
        dernierPoint = point;
    }
    return (nombreIntersections % 2) === 1;
}
export const isInMultiPolygone = (latitude: number, longitude: number, multiPolygone: any) => {
    for (const polygone of multiPolygone) {
        if (isInPolygone(polygone, latitude, longitude)) {
            return true;
        }
    }
    return false;
}