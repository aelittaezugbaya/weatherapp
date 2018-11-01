
const app = require('../src');
const server = app.listen();
const request = require('supertest').agent(server);
const expect = require("chai").expect;

describe("example of test", () => {
  it("working fine ", () => {
    var test = "test"
    expect(test).to.equal("test")
  })
})


describe("server", () => {
  describe("GET /api/weather", () => {
    it('return status 200 ', (done) => {
      request.get('/api/weather')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done);
    })

    it('return json type', (done) => {
      request.get('/api/weather')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done);
    })

    it('return body typeof Object', (done) => {
      request.get('/api/weather')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200).then(response => {
          expect(typeof response.body).to.equal('object')
          done()
        });
    })
  })


  describe("GET /api/forecast", () => {
    it('return status 200 ', (done) => {
      request.get('/api/forecast')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done);
    })

    it('return json type', (done) => {
      request.get('/api/forecast')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done);
    })

    it('return body which contains array of three oblects', (done) => {
      request.get('/api/forecast')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200).then(response => {
          expect(response.body.length).to.equal(3)
          done()
        });
    })
  })
});
