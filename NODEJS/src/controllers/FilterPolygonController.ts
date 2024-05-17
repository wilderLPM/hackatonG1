import polygonData from '../data/polygons-data.json' assert {type: 'json'};

export const findByName = (req: any, res: any) =>
    res.json({data: polygonData.polygons.filter(pol => pol.name === req.params.name), status: res.statusCode});

export const findByStartedBy = (req: any, res: any) =>
    res.json({data: polygonData.polygons.filter(pol => pol.name.startsWith(req.params.name)), status: res.statusCode});
export const findByEndedBy = (req: any, res: any) =>
    res.json({data: polygonData.polygons.filter(pol => pol.name.endsWith(req.params.name)), status: res.statusCode});

export const findByCoordinate = (req: any, res: any) =>
    res.json({data: polygonData.polygons.filter(pol => (pol.latitude === parseFloat(req.params.lat) && pol.longitude === parseFloat(req.params.long)) ), status: res.statusCode});

export const findByLocation = (req: any, res: any) => {
    res.json({data: polygonData.polygons.filter(pol => pol.location === req.params.location ), status: res.statusCode})
}
export const findByStartedByLocation = (req: any, res: any) =>
    res.json({data: polygonData.polygons.filter(pol => pol.location.startsWith(req.params.location)), status: res.statusCode})
export const findByEndedByLocation = (req: any, res: any) =>
    res.json({data: polygonData.polygons.filter(pol => pol.location.endsWith(req.params.location)), status: res.statusCode});