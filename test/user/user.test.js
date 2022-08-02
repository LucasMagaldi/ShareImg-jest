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
                expect(res.body.response).toEqual("Email alredy registered")
            }).catch(err => {
                console.log(err)
                throw new Error(err)
            });
    }, 90000);

    it("Should Sign-in", () => {

        let user = {
            email: "lucas.magaldi@hotmail.commmMmm",
            password: "hahahaha"
        }

        return request.post("/auth/login").send(user)
            .then(res => {
                expect(res.status).toEqual(200);
                expect(res.body.response).toEqual(2);
             })
    }, 90000);
});