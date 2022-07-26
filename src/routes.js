import { Router } from "express";
import authController from "./app/controllers/authController.js";

class Routes  {
    constructor() {
        this.routes = Router();
        this.ApplicationRoutes();
    }

    ApplicationRoutes() {
        this.routes.get('/', (req,res)=> {  
            return res.status(200).json({number:10000})
        });
        
        this.routes.post('/user', authController.Register);
     
    }
}

export default new Routes().routes;