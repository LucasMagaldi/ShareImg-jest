import User from "../models/User.js";
import Test from "../models/Test.js";
import authServices from "../services/authServices.js";

class AuthController {

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

            return res.status(200).json({response: req.body});
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                response: "An error happen. Please try again in few minutes"
            });
        }
    }

}


export default new AuthController(); 