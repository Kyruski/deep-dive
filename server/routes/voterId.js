const router = require('express').Router();
// const bodyParser = require('body-parser');
const db = require('../../db/index.js')

// let urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/:state', urlencodedParser, (req, res) => {
  console.log('what is this --->', req.params.state);
  let state = req.params.state;
  db.getStateIdLaws(state, (err, results) => {
    if (err) {
      console.log('error on voterId API: ', err)
      res.end()
    } else {
      console.log('our results', results)
      res.send(results)
    }
  })
})

module.exports = router;
