import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './DB/connection';

import routes from './routes.js';

dotenv.config();

class App {
    constructor() {
        this.server = express();
        this.MiddlewareConfig();
        this.Cors();
        this.Routes();
        this.startDB()
    }

    async startDB() {
        try{
            await connectDB("mongodb+srv://Lucas:lsm281099@nodeexpressprojects.cfhyv.mongodb.net/20-JOBIFY?retryWrites=true&w=majority");
            
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