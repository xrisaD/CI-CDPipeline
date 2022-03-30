const request = require('supertest');
const app = require('../app');


describe("Version Format Test", () => {
    test("GET /", (done) => {
        request(app)
        .get("/")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
            expect(res.body.version).toMatch(/^\d.\d.\d$/)
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        });
    });
});