const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ data: ['dolphins', 'manatees', 'sea turles'] })
})

router.get('/voterId', (req, res) => {
  res.json({ data: ['diff', 'test', 'sea happens'] })
})

module.exports = router;