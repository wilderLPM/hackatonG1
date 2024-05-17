export class TokenServices
{
    static user: any = {};
    static setUser(user: any) {
        this.user = user;
    }
    static getUser() {
        return this.user;
    }
}