

class AuthController {

    async Register(req, res) {
        try {
            const { name, email, password } = req.body;
            if(name == undefined || !name) {
                return res.status(400).json({response: false});
            }
            if (password.length <= 8) {
                return res.status(401).json({
                    response: "Your password must contain more then 8 characteres"
                });
            }
         return res.status(200).json({response: 12});   
        } catch (error) {
            return res.status(500).json({response: false});
        }
    }

}


export default new AuthController();