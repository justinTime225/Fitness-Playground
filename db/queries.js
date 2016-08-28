const promise = require('bluebird');

const options = {
  // Initialization Options
  promiseLib: promise
};

const pgp = require('pg-promise')(options);


// const connectionString = 'pginstance.ctwfwbqhfx8u.us-west-1.rds.amazonaws.com:5432' || 'postgres://localhost:5432/training';
const db = pgp({
  user: 'fitness123',
  database: 'fitnessPlayground',
  password: 'keeponfasting',
  host: 'fitnesstest.ctwfwbqhfx8u.us-west-1.rds.amazonaws.com',
  port: 5432,
});

// helper function
function handleQuery(query) {
  let q = {};
  if (query.superset === 'true') {
    q.superset = " LEFT OUTER JOIN bicep B ON A.superset_ID = B.ID ";
    q.supersetExercises = ", B.name as supersetName, B.break_under_min as superBreak";
  } else {
    q.superset = '';
    q.supersetExercises = '';
  }
  if (query.intensity === 'Heavy') {
    q.intensity = "concat(A.heavy_rep_min, '-', A.heavy_rep_max) as HeavyRepRange,";
  } else {
    q.intensity = "concat(A.light_rep_min, '-', A.light_rep_max) as LightRepRange,";
  }
  if (query.buildType === 'Bulk') {
    q.buildType = " where A.build_type='Bulk' ";
  } else {
    q.buildType = " where A.build_type='Tone' ";
  }
  q.query = "select A.name, concat(A.set_min, '-', A.set_max) as SetRange, \
  " + q.intensity + " \
  A.break_under_min as Break_Time, A.superset_type, A.build_type" + q.supersetExercises + " \
  from chest A " + q.superset + q.buildType + " \
  UNION \
  select A.name, concat(A.set_min, '-', A.set_max) as SetRange, \
  " + q.intensity + " \
  A.break_under_min as Break_Time, A.superset_type, A.build_type" + q.supersetExercises + " \
  from tricep A" + q.superset + q.buildType;

  return q;
}
// query functions
function fetchPushGroup(req, res, next) {
  console.log('req info', req.query);
  const q = handleQuery(req.query);
  db.any(q.query)
    .then(function resolve(data) {
      res.status(200).send(data);
    })
    .catch(function error(err) {
      return next(err);
    });
}

function fetchPullGroup(req, res, next) {
  
}

function fetchLowerBodyGroup(req, res, next) {
  
}

function getChestExercises(req, res, next) {
  const query = "select name, concat(set_min, '-', set_max) as SetRange, \
  concat(light_rep_min, '-', light_rep_max) as LightRepRange, \
  concat(heavy_rep_min, '-', heavy_rep_max) as HeavyRepRange, \
  break_under_min, superset_type, build_type \
  from chest";
  db.any(query)
    .then(function resolve(data) {
      res.status(200).send(data);
    })
    .catch(function error(err) {
      return next(err);
    });
}

function getBicepExercises(req, res, next) {
  const query = "select name, concat(set_min, '-', set_max) as SetRange, \
  concat(light_rep_min, '-', light_rep_max) as LightRepRange, \
  concat(heavy_rep_min, '-', heavy_rep_max) as HeavyRepRange, \
  break_under_min, superset_type, build_type \
  from bicep";
  db.any(query)
    .then(function resolve(data) {
      res.status(200).send(data);
    })
    .catch(function error(err) {
      return next(err);
    });
}

function getBackExercises(req, res, next) {
  const query = "select name, concat(set_min, '-', set_max) as SetRange, \
  concat(light_rep_min, '-', light_rep_max) as LightRepRange, \
  concat(heavy_rep_min, '-', heavy_rep_max) as HeavyRepRange, \
  break_under_min, superset_type, build_type \
  from back";
  db.any(query)
    .then(function resolve(data) {
      res.status(200).send(data);
    })
    .catch(function error(err) {
      return next(err);
    });
}

function getTricepExercises(req, res, next) {
  const query = "select name, concat(set_min, '-', set_max) as SetRange, \
  concat(light_rep_min, '-', light_rep_max) as LightRepRange, \
  concat(heavy_rep_min, '-', heavy_rep_max) as HeavyRepRange, \
  break_under_min, superset_type, build_type \
  from tricep";
  db.any(query)
    .then(function resolve(data) {
      res.status(200).send(data);
    })
    .catch(function error(err) {
      return next(err);
    });
}

function getLegsExercises(req, res, next) {
  const query = "select name, concat(set_min, '-', set_max) as SetRange, \
  concat(light_rep_min, '-', light_rep_max) as LightRepRange, \
  concat(heavy_rep_min, '-', heavy_rep_max) as HeavyRepRange, \
  break_under_min, superset_type, build_type \
  from legs";
  db.any(query)
    .then(function resolve(data) {
      res.status(200).send(data);
    })
    .catch(function error(err) {
      return next(err);
    });
}

function getShouldersExercises(req, res, next) {
  const query = "select name, concat(set_min, '-', set_max) as SetRange, \
  concat(light_rep_min, '-', light_rep_max) as LightRepRange, \
  concat(heavy_rep_min, '-', heavy_rep_max) as HeavyRepRange, \
  break_under_min, superset_type, build_type \
  from shoulders";
  db.any(query)
    .then(function resolve(data) {
      res.status(200).send(data);
    })
    .catch(function error(err) {
      return next(err);
    });
}

function getCoreExercises(req, res, next) {
  const query = "select name, concat(set_min, '-', set_max) as SetRange, \
  concat(light_rep_min, '-', light_rep_max) as LightRepRange, \
  concat(heavy_rep_min, '-', heavy_rep_max) as HeavyRepRange, \
  break_under_min, superset_type, build_type \
  from core";
  db.any(query)
    .then(function resolve(data) {
      res.status(200).send(data);
    })
    .catch(function error(err) {
      return next(err);
    });
}


module.exports = {
  fetchPushGroup: fetchPushGroup,
  fetchPullGroup: fetchPullGroup,
  fetchLowerBodyGroup: fetchLowerBodyGroup,
  getChestExercises: getChestExercises,
  getBicepExercises: getBicepExercises,
  getBackExercises: getBackExercises,
  getTricepExercises: getTricepExercises,
  getLegsExercises: getLegsExercises,
  getShouldersExercises: getShouldersExercises,
  getCoreExercises: getCoreExercises
};


