const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ data: ["dolphins", "manatees", "sea turles"] });
});

router.get("/hello", (req, res) => {
  res.json({ data: ["dolphins", "manatees", "sea turles"] });
});

module.exports = router;
