const config = require("../knexfile")["production"];
const knex = require("knex")(config);

const initialConnection = knex("test table")
  .then(result => {
    console.log("successful connection to hosted database, lets go team!");
  })
  .catch(err => {
    console.log("err:", err);
  });

const getStateIdLaws = (state, cb) => {
  knex.select()
  .table('voter-id')
  .where('state', `${state}`)
  .then((data) => cb(null, data))
  .catch((err) => {
    cb(err)
    console.log('there was an error inserting row', err)
  })
}

const findAllCandidates = (err, cb) => {
  knex("candidates")
    .then(results => {
      cb(null, results);
    })
    .catch(err => {
      cb(err);
      console.log("err:", err);
    });
};

const findAllPolicies = (err, cb) => {
  knex("policies")
    .then(results => {
      cb(null, results);
    })
    .catch(err => {
      cb(err);
      console.log("err:", err);
    });
};

const findAllVoterId = (err, cb) => {
  knex("voter-id")
    .then(results => {
      cb(null, results);
    })
    .catch(err => {
      cb(err);
      console.log("err:", err);
    });
};

const findCandidatePage = (err, cb) => {
  knex.column('first-name', 'last-name', 'photo-url', 'party').select().from('candidates')
    .then((results) => {
      cb(null, results)
      console.log('results:', results)
    })
    .catch((err) => {
      cb(err)
      console.log('err:', err)
    })
}

const findAllBios = (err, cb) => {
  knex('bios')
    .then((results) => {
      cb(null, results)
      console.log('results:', results)
    })
    .catch((err) => {
      cb(err)
      console.log('err:', err)
    })
}




module.exports = {
  initialConnection,
  findAllCandidates,
  findAllPolicies,
  findAllVoterId,
<<<<<<< HEAD
  getStateIdLaws
}
=======
  findCandidatePage,
  findAllBios
};
>>>>>>> d7d88ac793e138be3acdb799774efb04b8a9edeb
