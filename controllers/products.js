const Product = require('../models/product');
const Review= require('../models/review');

module.exports = {
  index,
  new: newProduct,
  create,
  show
}

function index(req, res) {
  Product.find({}, function(err, products) {
    res.render('products/index', { products });
  });
}

function newProduct(req,res) {
  res.render('products/new')
};

function create (req,res) {
  const product = new Product(req.body);
  product.user = req.user._id;
  product.save(function(err){
    if (err) return render('<h3>Must be a member to create a product</h3>');
    res.redirect(`/products`);
  });
};

function show(req, res) {
  Product.findById(req.params.id, function(err, product) { 
    Review.find({product: product._id}, function (err, review) {
      res.render('products/show', {title: 'Product Detail', product, review} )
    });
  });
}