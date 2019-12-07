const note = require('../classes/note');

exports.get = async (req , res) => {

	try {

		noteTarget = await note.findManyAndPopulate(req.query , req._populate);

		res.success(noteTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.getPagination = async (req , res) => {

	try {

		noteTarget = await note.findManyAndPopulate(req.query , req._populate , req._page , req._size );
		res.success(noteTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.getSpecific = async (req , res) => {

	try {

		let noteTarget = await note.find( {_id: req._objectId } , req._populate );
		res.success(noteTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.create = async (req , res) => {

	try{

		const saved = await note.create(req.body);
		res.success(saved);

	} catch (err){
		res.repeat();
	}

};

exports.update = async (req , res) => {

	try {

		let target = await note.find({ _id : req._objectId });
		let updatedObj = await note.update(target , req.body);
		res.success(updatedObj);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.delete = async (req , res) => {

	try {

		let target = await note.find({ _id : req._objectId });
		let deletedObj = await note.deleteObj(target);
		res.success(deletedObj);

	} catch (err){
		res.preconditionFailed();
	}

};


