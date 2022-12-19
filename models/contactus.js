const mongoose = require('mongoose');
const schema = mongoose.Schema;

const contactusschema = new schema({
    
    name: {
        type: String,
        required:true
    
    },
    email: {
        type: String,
        required:true
    },

    message:{
        type: String,
        required:true
    },
   

});

const contactus = mongoose.model('Contactus',contactusschema );

module.exports = contactus;
