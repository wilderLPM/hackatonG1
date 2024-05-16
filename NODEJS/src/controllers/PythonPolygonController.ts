export const index = (req: any, res: any) => {
    const polygons = req.body.polygon;
    res.status(200).json({message: polygons, status: res.statusCode});
}

export const points = (req: any, res: any) => {
    const points = req.body.points;
    return res.status(200).json({message: points, status: res.statusCode});
}