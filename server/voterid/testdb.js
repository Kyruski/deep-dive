const path = require('path');
const pg = require('pg');
require('dotenv').config(path.join(__dirname, "./.env"));


const knex = require('knex')({
  client: 'pg',
  connection: ''
});

const insertStates = (row) => {
  //console.log(row)
   knex('voter_id').insert(row)
  .then(() => console.log('Successfully inserted row'))
  .catch((err) => console.log('there was an error inserting row', err))
}

module.exports = {
  insertStates
}