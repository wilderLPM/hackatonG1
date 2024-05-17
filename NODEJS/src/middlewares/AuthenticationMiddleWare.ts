import { TokenServices } from "../services/TokenServices.js";

export const authenticationMiddleWare = (req: any, res: any, next: any) => {
    if(req.headers.authorization === TokenServices.getUser().token)
        return next();
    else
        return res.status(401).json({message: "Unauthorized", status: res.statusCode});
}