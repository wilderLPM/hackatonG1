import dotenv from 'dotenv';

dotenv.config();

const CONFIG_APP = {
    PORT_SERVER: process.env.SERVER_PORT,
    ORIGIN: process.env.ORIGIN,
    TOKEN: process.env.TOKEN
}

export default CONFIG_APP;