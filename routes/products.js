var express = require('express');
var router = express.Router();
const productsCtrl = require('../controllers/products');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('products/index', {title: 'Product App', user: req.user});
});

router.get('/new', productsCtrl.new);

module.exports = router;
