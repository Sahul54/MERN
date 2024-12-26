const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    img: { 
        type: String, 
        required: false 
    },

});

module.exports = mongoose.model('Item', ItemSchema);