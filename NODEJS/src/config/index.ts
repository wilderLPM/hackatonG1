import dotenv from 'dotenv';

dotenv.config();

const CONFIG_APP = {
    PORT_SERVER: process.env.SERVER_PORT
}

export default CONFIG_APP;