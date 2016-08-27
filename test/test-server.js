const should = require('chai').should();
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server');


describe('Fitness Data', function() {
  it('should resond with chest data', (done) => {
    request(app)
      .get('/chest')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res, err) => {
        res.body.length.should.equal(5);
        res.body[0].name.should.equal('InclinePress');
        res.body[1].name.should.equal('FlatPress');
        res.body[2].name.should.equal('DeclinePress');
        res.body[3].name.should.equal('ChestFlyes');
        res.body[4].name.should.equal('Dips');
      })
      .end(done);
  });
  it('should resond with bicep data', (done) => {
    request(app)
      .get('/bicep')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res, err) => {
        res.body.length.should.equal(5);
        res.body[0].name.should.equal('StandingCurl');
        res.body[1].name.should.equal('HammerCurl');
        res.body[2].name.should.equal('InclineDumbbellCurl');
        res.body[3].name.should.equal('ReverseGripBentOverRows');
        res.body[4].name.should.equal('ConcentrationCurl');
      })
      .end(done);
  });
  it('should resond with back data', (done) => {
    request(app)
      .get('/back')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res, err) => {
        res.body.length.should.equal(5);
        res.body[0].name.should.equal('RomanianDeadlift');
        res.body[1].name.should.equal('PullUp');
        res.body[2].name.should.equal('LateralPulldown');
        res.body[3].name.should.equal('DumbbellRow');
        res.body[4].name.should.equal('SeatedRow');
      })
      .end(done);
  });
});