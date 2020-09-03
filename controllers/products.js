const Product = require('../models/product');
const Review= require('../models/review');

module.exports = {
  index,
  new: newProduct,
  create,
  show,
  edit,
  update
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
    if (err) {
      console.log(err)
      return render('<h3>Must be a member to create a product</h3>');
    } 
    res.redirect('/products');
  });
};

// function show(req, res) {
//   Product.findById(req.params.id, function(err, product) { 
//     Review.find({product: product._id}, function (err, review) {
//       res.render('products/show', {title: 'Product Detail', product, review} )
//     });
//   });
// }

function show(req, res) {
  Product.findById(req.params.id).populate('user').exec(function(err, product) { 
    Review.find({product: product._id}).populate('user').exec(function (err, review) {
      res.render('products/show', {title: 'Product Detail', product, review} )
    });
  });
}

function edit(req,res) {
  Product.findById(req.params.id, function(err, product){
    if(err) {
      res.redirect(`/products`);
    }
    res.render('products/edit', {title: 'Edit Product', product });
  });
}

function update(req, res) {
  Product.findByIdAndUpdate(req.params.id, req.body, function(err, product) {
    if(err) {
      res.render('products/edit', {title: 'Edit Product', product });
    }
    res.redirect(`/products`);
  });
}