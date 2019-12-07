const Collection = require( "mongoose" ).model( "collectionNote" );
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/env/jwt.config');

const find = (query , populate) => {

	let result = Collection.findOne(query)

	if (populate) result = result.populate(populate);
	return result

}

const findManyAndPopulate = (query , populate , skip , limit) => {

	if (!skip) skip = 0
	if (!limit) limit = 1000

	let result = Collection.find(query).limit(limit).skip(skip * limit);

	if (populate) result = result.populate(populate);
	return result

}

const create = (data) => {

	const collection = new Collection(data);
	

	return collection.save();

};

const update = ( collection, data ) => {

	const { name } = data;
	const current = collection;

    if (name) current.name = name

	return collection.save();

};

const deleteObj = ( collection ) => collection.deleteOne();

const wrap = (collection) => {

	if (collection === null) return {};
	const { _id , name,user } = collection;

	return { _id , name,user };

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
	
};
