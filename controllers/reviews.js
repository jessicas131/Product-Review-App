const Review = require('../models/review');
const Product = require('../models/product');

module.exports = {
  create,
  delete: deleteReview
}

function create(req, res) {
  req.body.product = req.params.id;
  req.body.user = req.user._id;

  Review.create(req.body, function(err, review) {
    if(err) return res.redirect(`/products/${review.product}`);
    res.redirect(`/products/${review.product}`);
    console.log(`${review.product}`)
  });

}

function deleteReview(req, res) {
  Review.findOneAndDelete({_id: req.params.id, user: req.user._id}, function(err, review) {
      if(err) console.log(err);
      res.redirect(`/products/${review.product}`)
    });

}
