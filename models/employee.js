const mongoose = require('mongoose');
const schema = mongoose.Schema;

const employeeschema = new schema({
    
        //   username:{
        //       type:String,
        //       required:true
    
        //   },
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
    gender:{
        type:String,
        required:true
    },
    profession:{
        type:String,
        required:true
    },
    address:{
        type:String,
        requuired:true
    },
    city:{
        type:String,
        required:true
    },

    state:{
        type:String,
        rrequired:true
    },

   zipcode:{
        type:String,
        rrequired:true
    }, 

 contactnumber:{
        type:String,
        required:true
    },

    free:{
        type:String
    }  
});

const employee = mongoose.model('employee', employeeschema);

module.exports = employee;
