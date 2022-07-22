import { Router } from "express";

class Routes  {
    constructor() {
        this.routes = Router();
        this.ApplicationRoutes();
    }

    ApplicationRoutes() {
        this.routes.get('/', (req,res)=> {  
            return res.status(200).json({number:10000})
        });
        
        this.routes.post('/user', (req, res) => {
            try {
             return res.status(200).json({response: 12});   
            } catch (error) {
                return res.status(500).json({response: false});
            }
            
        });
     
    }
}

export default new Routes().routes;