import CONFIG_APP from "../config/index.js";

export const authenticationMiddleWare = (req: any, res: any, next: any) => {
    if(req.headers.authorization === CONFIG_APP.TOKEN)
        return next();
    else
        return res.status(401).json({message: "Unauthorized", status: res.statusCode});
}