var express = require('express');
var router = express.Router();
const productsCtrl = require('../controllers/products');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('products/index', {title: 'Product App', user: req.user});
// });

router.get('/', isLoggedIn, productsCtrl.index);
router.get('/new', isLoggedIn, productsCtrl.new);
router.post('/', isLoggedIn, productsCtrl.create);
router.get('/:id', productsCtrl.show);
router.get('/:id/edit',isLoggedIn, productsCtrl.edit);
router.put('/:id', productsCtrl.update);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
