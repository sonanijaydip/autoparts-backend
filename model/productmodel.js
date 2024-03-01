var mongoose = require('mongoose');

var product_schema = new mongoose.Schema({
    price:{
        type: String
    },
    title:{
        type:String
    },
    offer:{
        type:String
    },
    discountprice:{
        type:String
    },
    rating:{
        type:String
    },
    thumbnail:{
        type:String
    },
    image:{
        type:String
    },
    category:{
        type:String
    },
    company:{
        type:String
    }
})

module.exports = mongoose.model('Product',product_schema)