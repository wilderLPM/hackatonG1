import fs from 'fs';

export const index = (req: any, res: any) => {
    const polygons = req.body.polygons;
    fs.writeFile('./src/data/polygons-data.json', JSON.stringify({polygons: polygons}), {
            encoding: "utf-8",
            flag: "w",
            mode: 0o666
        }, (err) => {
        if(err)
            console.log(err);
        else
            res.status(200).json({message: "File written successfully", status: res.statusCode});
    })
}

export const points = (req: any, res: any) => {
    const points = req.body.points;
    fs.writeFile('./src/data/points-data.json', JSON.stringify({points: points}), {
        encoding: "utf-8",
        flag: "w",
        mode: 0o666
    }, (err) => {
        if(err)
            console.log(err);
        else
            res.status(200).json({message: "File written successfully", status: res.statusCode});
    })
}