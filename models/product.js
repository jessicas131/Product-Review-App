const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  img: {
    type: String,
    default: public/images/makeup.png
  },
  productName: {
    type: String
  },
  productType: {
    type: String
  },
  price: {
    type: Number,
    min: 0,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }}, {
    timestamps: true
  });




module.exports = mongoose.model('Product', productSchema);