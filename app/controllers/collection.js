const collection = require('../classes/collection');
const note = require('../classes/note');

exports.get = async (req , res) => {

	try {

		collectionTarget = await collection.findManyAndPopulate(req.query , req._populate);

		res.success(collectionTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.getPagination = async (req , res) => {

	try {

		collectionTarget = await collection.findManyAndPopulate(req.query , req._populate , req._page , req._size );
		res.success(collectionTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.getSpecific = async (req , res) => {

	try {

		let collectionTarget = await collection.find( {_id: req._objectId } , req._populate );
		res.success(collectionTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.create = async (req , res) => {

	try{

		const saved = await collection.create(req.body);
		res.success(saved);

	} catch (err){
		res.repeat();
	}

};

exports.update = async (req , res) => {

	try {

		let target = await collection.find({ _id : req._objectId });
		let updatedObj = await collection.update(target , req.body);
		res.success(updatedObj);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.delete = async (req , res) => {

	try {

		let target = await collection.find({ _id : req._objectId });
		let deletedObj = await collection.deleteObj(target);
		await note.deleteMany({collectionNote: req._objectId})
		
		res.success(deletedObj);

	} catch (err){
		res.preconditionFailed();
	}

};


