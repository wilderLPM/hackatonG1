import jwt from 'jsonwebtoken';
import CONFIG_APP from "../config/index.js";

export default class AuthenticatedServices
{
    email: string;
    password: string;
    token: string = "";
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
        this.constructToken();
    }
    constructToken() {
        let id = Math.random();
        this.token = jwt.sign({
            userId: id,
            email: this.email
        },
            CONFIG_APP.TOKEN,
            { expiresIn: "1h" }
        )
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getToken() {
        return this.token;
    }
}