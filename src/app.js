import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './DB/connection.js';

import routes from './routes.js';

dotenv.config();

class App {
    constructor() {
        this.startDB();
        this.server = express();
        this.MiddlewareConfig();
        this.Cors();
        this.Routes();
        
    }

    async startDB() {
        try{
            await connectDB(process.env.MONGO_URL);
          
        }
        catch(err) {
            console.log(err);
        }
    }

    MiddlewareConfig() {
        this.server.use(express.json());
    }

    Cors() {
        this.server.use(cors());
    }

    Routes(){
        this.server.use(routes);
    }

}


export default new App().server;