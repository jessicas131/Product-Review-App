var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('products/index', {title: 'Product App', user: req.user});
});

module.exports = router;
