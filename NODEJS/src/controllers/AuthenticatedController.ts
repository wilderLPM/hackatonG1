import AuthenticatedServices from "../services/AuthenticatedServices.js";
import { TokenServices } from "../services/TokenServices.js";

export const authenticated = (req: any, res: any) => {
    let user: { email: string; password: string; token: string; };
    console.log(req.body);
    const authenticatedService = new AuthenticatedServices(req.body.email, req.body.password);
    user = {
        email: authenticatedService.getEmail(),
        password: authenticatedService.getPassword(),
        token: authenticatedService.getToken()
    }
    TokenServices.setUser(user);
    if(user) {
        res.json({data: user, status: res.statusCode});
    }
    else
        res.status(404).json({error: "Password or email has failed", status: res.statusCode});
}