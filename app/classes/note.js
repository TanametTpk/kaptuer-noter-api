const Note = require( "mongoose" ).model( "note" );
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/env/jwt.config');

const find = (query , populate) => {

	let result = Note.findOne(query)

	if (populate) result = result.populate(populate);
	return result

}

const findManyAndPopulate = (query , populate , skip , limit) => {

	if (!skip) skip = 0
	if (!limit) limit = 1000

	let result = Note.find(query).limit(limit).skip(skip * limit);

	if (populate) result = result.populate(populate);
	return result

}

const create = (data) => {

	const note = new Note(data);
	

	return note.save();

};

const update = ( note, data ) => {

	const { content,star,pin } = data;
	const current = note;

    if (content) current.content = content
    if (note.start !== star) current.star = star
    if (note.pin !== pin) current.pin = pin


	return note.save();

};

const deleteObj = ( note ) => note.deleteOne();

const deleteMany = (query) => Note.deleteMany(query)

const wrap = (note) => {

	if (note === null) return {};
	const { _id , content,star,pin } = note;

	return { _id , content,star,pin };

}

const createJWT = (data) => {

    return jwt.sign(data , jwtConfig.jwt_secret)

}



module.exports = {
	find,
	findManyAndPopulate,
	create,
	update,
	deleteObj,
	wrap,
	deleteMany
};
