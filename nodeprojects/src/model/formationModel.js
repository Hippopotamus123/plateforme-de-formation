var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var formationSchema = new Schema({
    nameFormation:{
        type: String,
        required:true,
        
    },
    dateAjout:{
        type:Date,
        required:true,
    },
    description: {
        type:String,
        required: false,
    },
});
module.exports = mongoose.model('formation',formationSchema);