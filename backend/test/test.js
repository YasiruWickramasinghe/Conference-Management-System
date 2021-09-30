const app = require('../server');
const mongoose = require('mongoose');
const supertest = require('supertest');

//npm i -D jest supertest

beforeEach((done) => {
    mongoose.connect(
        "mongodb+srv://AF:AF@cms.yrylr.mongodb.net/CMS?retryWrites=true&w=majority",
        {useNewUrlParser: true, useUnifiedTopology: true},
        () => done()
    );
});



test("get reviewer api testing", () => {

    return supertest(app)

    .get('/rev/researchpaper/underreview')

    .then((response) => {

        expect(response.statusCode).toBe(200);

    });

});

test("get workshop api testing", () => {

    return supertest(app)

    .get('/rev/workshop/underreview')

    .then((response) => {

        expect(response.statusCode).toBe(200);

    });

});


afterEach((done) => {

    mongoose.disconnect();

    return done();

});