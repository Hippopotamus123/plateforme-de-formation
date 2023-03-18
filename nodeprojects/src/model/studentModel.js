var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    firstname:{
        type: String,
        required:true,
        
    },
    lastname:{
        type:String,
        required:true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        
    },
    role:{
        type :String,
        // Enumerator:['admin','candidat','formateur'],
        required :true,
    },
    phoneNumber:{
        type : Number,
        required : false,
    }
   
});
module.exports = mongoose.model('student',StudentSchema);