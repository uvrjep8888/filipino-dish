const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const expect = chai.expect;
chai.use(chaiHttp);

describe('GET /api/entries/food', function () {
  it('should return a food object with specific properties', function (done) {
    chai.request(app)
      .get('/api/entries/food')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        console.log(res.body);
        done();
      });
  });
});
