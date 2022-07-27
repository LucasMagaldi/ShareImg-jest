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

            const userExist = await authServices.FindByEmail(email);
            if (userExist) return res.status(400).json({response: "Email alredy registered"})
           // await new Test.create({name: name, email: email, password: password});
            await User.create({name, email, password});
           
         return res.status(200).json({response: true});   
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                response: "An error happen. Please try again in few minutes"
            });
        }
    }

}


export default new AuthController();