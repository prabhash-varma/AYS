const mongoose = require('mongoose');
const schema = mongoose.Schema;

const customerschema = new schema({
    
    firstname: {
        type: String,
        required:true
    
    },
    lastname: {
        type: String,
        required:true
    },

    email: {
        type: String,
        required:true
    },

    password: {
        type: String,
        required:true
    },

    contactnumber:{
        type:Number,
        required:true
    },

    address: {
        type: String,
        required:true
    },

    zipcode: {
        type: Number,
        required:true
    },

    city: {
        type: String,
        required:true
    },

    state: {
        type: String,
        required:true

    }

    



   

});

const customer = mongoose.model('Customer', customerschema);

module.exports = customer;
