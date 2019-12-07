var mongoose = require("mongoose");
var Schema = require("mongoose").Schema;
var Encoder = require("./libs/Encoder")

var collectionSchema = Schema({

    name : { type: String, require: true },
	user : { type: String, require: true },
	created_at : { type:Date, required : true ,default: Date.now}

})





module.exports = mongoose.model('collectionNote', collectionSchema)