import bcrypt from 'bcrypt';
import User from "../models/User.js";

class AuthServices {

    async CreateUser(name, email, password){
        try {
            const response = "Email alredy registered"
            const userExist = await this.FindByEmail(email);
            if (userExist) return response
           // await new Test.create({name: name, email: email, password: password});
           const hashPassword = await bcrypt.hash(password, 10);
            await User.create({name, email, password: hashPassword});
           return true
        } catch (error) {
            return false
        }
    }

    async Login(email, password) {
        try {
            
        } catch (error) {
            
        }
    }

    async FindByEmail(email) {
        try {
            const user = await User.findOne({email});
            console.log(`HERE: ${! !user}`)
            return ! !user
        } catch (error) {
            
        }
    }

}

export default new AuthServices();