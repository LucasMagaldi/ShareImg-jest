import express from 'express';
import cors from 'cors';

import routes from './routes.js';

class App {
    constructor() {
        this.server = express();
        this.MiddlewareConfig();
        this.Cors();
        this.Routes();
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