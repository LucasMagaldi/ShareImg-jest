import app from "../../src/app";
import supertest from "supertest";
const request = supertest(app);



describe("Insert User", () => {
    it("Should successfully insert an user", () => {
       
        let user = {
            name: "Lucas",
            email: "lucas.magaldi@hotmail.commmMmm",
            password: "hahahaha"
        }

        return request.post("/user").send(user)
            .then(res => {
                expect(res.status).toEqual(400);
                expect(res.body.response).toEqual(true)
            }).catch(err => {
                console.log(err)
                throw new Error(err)
            });
    }, 90000);

});