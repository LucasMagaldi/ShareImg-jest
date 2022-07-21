import app from "../src/app";
import supertest from "supertest";
const request = supertest(app);


it("The server must be running on 3000", () => {
    return request.get('/').then(res => {
        let status = res.status
        expect(status).toEqual(200);
    })
})