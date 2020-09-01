var express = require('express');
var router = express.Router();

const reviewsCtrl = require('../controllers/reviews');

router.post('/products/:id/reviews', reviewsCtrl.create);

module.exports = router;
