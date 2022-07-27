import User from "../models/User.js";

class AuthServices {

    async FindByEmail(email) {
        try {
            const user = await User.findOne({email});
            return ! !user
        } catch (error) {
            
        }
    }

}

export default new AuthServices();