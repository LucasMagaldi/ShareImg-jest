import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import dotenv from 'dotenv';

dotenv.config();

export default async function(req, res, next) {
    const header = req.headers['authorization'];
    const [ prefix, token ] = header.split(' ');
    
    try {
        const decoded  = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        if(!decoded) {
            return res.status(500).json({
                status: false, mensage: "Authentication failed"
            });
        }

        req.id = decoded.id;
        req.name = decoded.name 

        return next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({status: false, mensage: "Error System"})
    }
    
    
}