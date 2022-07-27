import User from "../models/User.js";

class AuthServices {

    async CreateUser(name, email, password){
        try {
            const response = "Email alredy registered"
            const userExist = await this.FindByEmail(email);
            if (userExist) return response
           // await new Test.create({name: name, email: email, password: password});
            await User.create({name, email, password});
           return true
        } catch (error) {
            return false
        }
    }

    async FindByEmail(email) {
        try {
            const user = await User.findOne({email});
            return ! !user
        } catch (error) {
            
        }
    }

}

export default new AuthServices();