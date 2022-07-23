import app from "../../src/app";
import supertest from "supertest";
const request = supertest(app);


describe("Insert User", () => {
    test("Should successfully insert an user", () => {
        let user = {
            name: "Lucas",
            email: "lucas.magaldi@hotmail.com",
            password: "lsm"
        }

        return request.post("/user").send(user)
            .then(res => {
                expect(res.status).toEqual(401);
                expect(res.body.response).toEqual("Your password must contain more then 8 characteres")
            }).catch(err => {
                throw new Error(err)
            });
    });

});