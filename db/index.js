const config = require('../knexfile')['production'];
const knex = require('knex')(config)
const sql = knex('test table').then((result) => {
  console.log('successful open connection to hosted database')
}).catch((err) => {
  console.log('err:', err)
})

const getStateIdLaws = (state) => {
  //console.log(row)
  knex.select().table('voter-id')
  .where('state', `${state}`)
  .then(() => console.log('Successfully inserted row'))
  .catch((err) => console.log('there was an error inserting row', err))
}

module.exports = sql
