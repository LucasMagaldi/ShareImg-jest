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

    async Login(email, pass) {
        try {
            const user = await this.BringDataByEmail(email);
            if(user === null) return "No user founded"
            const { password } = user

            const validatedPassword = await bcrypt.compare(pass, password);
            if(!validatedPassword) return "Invalid password"

            
            return password
        } catch (error) {
            
        }
    }

    async FindByEmail(email) {
        try {
            const user = await User.findOne({email});
            return ! !user
        } catch (error) {
            
        }
    }

    async BringDataByEmail(email) {
        try {
            const user = await User.findOne({email});
            //if(user === null) return "No data founded"

            return user
        } catch (error) {
            
        }
    }

}

export default new AuthServices();