import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

import authServices from "../services/authServices.js";

dotenv.config();

const jwt_secret = process.env.JWT_SECRET;

class AuthController {

    async Testing(req,res) {
        return res.status(200).json({x:req.name});
    }

    async Register(req, res) {
        try {
            const { name, email, password } = req.body;
            if(name == undefined || !name) {
                return res.status(400).json({response: "Provide your name"});
            }
            if(password == undefined || !password) {
                return res.status(400).json({response: "Provide a valid password"});
            }
            if (password.length < 8) {
                return res.status(401).json({
                    response: "Your password must contain more then 8 characteres"
                });
            }
            const user = await authServices.CreateUser(name, email, password);
            if (user === "Email alredy registered" ) return res.status(400).json({response: "Email alredy registered"})
               
            if(user) return res.status(200).json({response: true});   
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                response: "An error happen. Please try again in few minutes"
            });
        }
    }

    async Login(req,res) {
        try {
            const { email, password } = req.body;
            //const user = await authServices.BringDataByEmail(email);
            const user = await authServices.Login(email, password);
            if (user === "No user founded") {
                return res.status(400).json({response: "You are not register yet"})
            } 
            if(user === "Invalid password") {
                return res.status(401).json({response: "Incorrect credentials"})
            }

            const { _id, name } = user;

            return res.status(200).json({
                status: true,
                response: jwt
                    .sign(
                        {id: _id, name},
                        jwt_secret,
                        {expiresIn: "1h"}
                    )
            });
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                response: "An error happen. Please try again in few minutes"
            });
        }
    }

}


export default new AuthController(); 