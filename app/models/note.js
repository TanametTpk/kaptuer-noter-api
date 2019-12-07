var mongoose = require("mongoose");
var Schema = require("mongoose").Schema;
var Encoder = require("./libs/Encoder")

var noteSchema = Schema({

    content : { type: String, require: true },
	star : { type: Boolean, default: false },
	pin : { type: Boolean, default: false  },
	collectionNote: {type: Schema.Types.ObjectId, ref: 'collectionNote', require: true},
	created_at : { type:Date, required : true ,default: Date.now},

})





module.exports = mongoose.model('note', noteSchema)