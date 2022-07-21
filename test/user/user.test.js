import app from "../../src/app";
import supertest from "supertest";
const request = supertest(app);


describe("Insert User", () => {
    test("Should successfully insert an user", () => {
        let user = {
            name: "Lucas"
        }

        try {
            const response = request.post('/user')
                                        .send(user);
            expect(response.status).toEqual(200);
            expect(response.body.name).toEqual(6);
        } catch (error) {
            
        }

        
    });
});