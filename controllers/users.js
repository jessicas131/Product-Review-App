// const Product = require('../models/product');

// module.exports = {
//   new: newProduct,
//   create,
// }

// function newProduct(req,res) {
//   res.render('products/new')
// }

// function create (req,res) {
//   const product = new Product(req.body);
//   product.user = req.user._id;
//   product.save(function(err){
//     if (err) return render('<h3>Must be a member to create a product</h3>');
//     res.redirect(`/products/${product.id}`);
//   });
// };