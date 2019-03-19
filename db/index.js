const config = require('../knexfile')['production'];
const knex = require('knex')(config)
const sql = knex('test table').then((result) => {
  console.log('successful open connection to hosted database')
}).catch((err) => {
  console.log('err:', err)
})

const getStateIdLaws = (state, cb) => {
  //console.log(row)
  knex.select().table('voter-id')
  .where('state', `${state}`)
  .then((data) => cb(null, data))
  .catch((err) => {
    cb(err)
    console.log('there was an error inserting row', err)
  })
}

module.exports = {
  sql,
  getStateIdLaws
}
