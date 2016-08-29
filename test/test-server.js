const should = require('chai').should();
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server');


describe('Fitness Data', function() {

  describe('Custom Workout', () => {
    const pushBulk = {InclinePress: 'Bulk', FlatPress: 'Bulk', DeclinePress: 'Bulk', CloseGripBenchPress: 'Bulk', DumbbellKickback: 'Bulk', Pushdown: 'Bulk'};
    describe('Push Data', () => {
      it('should respond with heavy superset push data', (done) => {
        request(app)
          .get('/push')
          .query({theme: 'push', superset: 'true', buildType: 'Bulk', intensity: 'Heavy'})
          .expect(200)
          .expect('Content-Type', /json/)
          .expect((res, err) => {
            res.body.length.should.equal(6);
            for (var key in res.body) {
              res.body[key].supersetbreak.should.equal(1);
              res.body[key].build_type.should.equal("Bulk");
            }
          })
          .end(done);
      });
      it('should respond with light tone push data', (done) => {
        request(app)
          .get('/push')
          .query({theme: 'push', superset: 'false', buildType: 'Tone', intensity: 'Light'})
          .expect(200)
          .expect('Content-Type', /json/)
          .expect((res, err) => {
            res.body.length.should.equal(3);
            for (var key in res.body) {
              res.body[key].build_type.should.equal("Tone");
            }
          })
          .end(done);
      });
    });
    describe('Pull Data', () => {
      it('should respond with heavy superset pull data', (done) => {
        request(app)
          .get('/pull')
          .query({theme: 'pull', superset: 'true', buildType: 'Bulk', intensity: 'Heavy'})
          .expect(200)
          .expect('Content-Type', /json/)
          .expect((res, err) => {
            res.body.length.should.equal(7);
            for (var key in res.body) {
              res.body[key].supersetbreak.should.equal(1);
              res.body[key].build_type.should.equal("Bulk");
            }
          })
          .end(done);
      });
      it('should respond with light tone pull data', (done) => {
        request(app)
          .get('/pull')
          .query({theme: 'pull', superset: 'false', buildType: 'Tone', intensity: 'Light'})
          .expect(200)
          .expect('Content-Type', /json/)
          .expect((res, err) => {
            res.body.length.should.equal(3);
            for (var key in res.body) {
              res.body[key].build_type.should.equal("Tone");
            }
          })
          .end(done);
      });
    });
    describe('Lower Body Data', () => {
      it('should respond with heavy superset Lower Body data', (done) => {
        request(app)
          .get('/lowerbody')
          .query({theme: 'pull', superset: 'true', buildType: 'Bulk', intensity: 'Heavy'})
          .expect(200)
          .expect('Content-Type', /json/)
          .expect((res, err) => {
            res.body.length.should.equal(4);
            for (var key in res.body) {
              res.body[key].supersetbreak.should.equal(1);
              res.body[key].build_type.should.equal("Bulk");
            }
          })
          .end(done);
      });
      it('should respond with light tone Lower Body data', (done) => {
        request(app)
          .get('/lowerbody')
          .query({theme: 'pull', superset: 'false', buildType: 'Tone', intensity: 'Light'})
          .expect(200)
          .expect('Content-Type', /json/)
          .expect((res, err) => {
            res.body.length.should.equal(5);
            for (var key in res.body) {
              res.body[key].build_type.should.equal("Tone");
            }
          })
          .end(done);
      });
    });

  });

  describe('Basic Workout', () => {
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
    it('should respond with core data', (done) => {
      request(app)
        .get('/core')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect((res, err) => {
          res.body.length.should.equal(3);
          res.body[0].name.should.equal('ObliqueSideBend');
          res.body[1].name.should.equal('AbPullDown');
          res.body[2].name.should.equal('WeightCrunch');
        })
        .end(done);
    });
  });
});