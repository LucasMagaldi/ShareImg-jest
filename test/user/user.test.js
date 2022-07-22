import app from "../../src/app";
import supertest from "supertest";
const request = supertest(app);


describe("Insert User", () => {
    test("Should successfully insert an user", () => {
        let user = {
            name: "Lucas"
        }

        return request.post("/user").send(user)
            .then(res => {
                expect(res.status).toEqual(200);
                expect(res.body.response).toEqual(15)
            })
    });

});