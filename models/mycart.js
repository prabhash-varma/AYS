const mongoose = require('mongoose');
const schema = mongoose.Schema;

const mycartschema = new schema({

    servicename: {
        type: String,
        required:true
    },
    assigned: {
        type: String,
        required:true
    },

    customerid:{
        type:String,
    },

    subtype:{
        type:String,
    }
});

const mycart = mongoose.model('mycart', mycartschema);
module.exports = mycart;
