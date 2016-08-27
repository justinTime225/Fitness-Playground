const should = require('chai').should();
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server');


describe('Fitness Data', function() {
  it('should respond with chest data', (done) => {
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
  it('should respond with bicep data', (done) => {
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
  it('should respond with back data', (done) => {
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
  it('should respond with tricep data', (done) => {
    request(app)
      .get('/tricep')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res, err) => {
        res.body.length.should.equal(4);
        res.body[0].name.should.equal('CloseGripBenchPress');
        res.body[1].name.should.equal('TricepHammer');
        res.body[2].name.should.equal('DumbbellKickback');
        res.body[3].name.should.equal('Pushdown');
      })
      .end(done);
  });
  it('should respond with legs data', (done) => {
    request(app)
      .get('/legs')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res, err) => {
        res.body.length.should.equal(6);
        res.body[0].name.should.equal('Squats');
        res.body[1].name.should.equal('Lunges');
        res.body[2].name.should.equal('SumoDeadlift');
        res.body[3].name.should.equal('LegExtension');
        res.body[4].name.should.equal('LegCurl');
        res.body[5].name.should.equal('CalveRaise');
      })
      .end(done);
  });
  it('should respond with shoulders data', (done) => {
    request(app)
      .get('/shoulders')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res, err) => {
        res.body.length.should.equal(3);
        res.body[0].name.should.equal('StandingDumbbellPress');
        res.body[1].name.should.equal('LateralRaise');
        res.body[2].name.should.equal('SeatedDumbbellPress');
      })
      .end(done);
  });
});