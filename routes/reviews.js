var express = require('express');
var router = express.Router();

const reviewsCtrl = require('../controllers/reviews');

router.post('/products/:id/reviews', reviewsCtrl.create);
router.delete('/reviews/:id', reviewsCtrl.delete);

module.exports = router;
