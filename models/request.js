const text = require('body-parser/lib/types/text');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const requestschema = new schema({
    customerid: {
        type: String,
        required:true
    },
    employeeid: {
        type: String,
        required:true
    },
    address:{
        type:String
    },
    servicename: {
        type: String
            },            
    cost: {
        type: String,
        required:true
            }, 
    served:{
        type:String,
        required:true
    }
});
const request = mongoose.model('Request', requestschema);
module.exports = request;
