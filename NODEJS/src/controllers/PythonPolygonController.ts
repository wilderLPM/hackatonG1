import fs from 'fs';

export const index = (req: any, res: any) => {
    const polygons = req.body.polygon;
    fs.writeFile('./../data/data.json', polygons, {
        encoding: 'utf-8',
        flag: 'w'
    }, (err) => {
        if(err)
            console.log(err);
        else
            console.log("File written successfully\n");
            console.log("The written has the following contents:");
            console.log(fs.readFileSync("movies.txt", "utf8"));
    })
    res.status(200).json({message: polygons, status: res.statusCode});
}

export const points = (req: any, res: any) => {
    const points = req.body.points;
    return res.status(200).json({message: points, status: res.statusCode});
}