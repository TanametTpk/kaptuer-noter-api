const Collection = require('../../app/classes/collection');

module.exports = (socket) => {

	socket.on('create-collection' , async(data) => {

		try{

			let data = await Collection.create(data);

			

		} catch (err) {

			console.log(err);

		}

	})

	socket.on('update-collection' , async(data) => {

		try{

			let target = await Collection.find({ _id : data._objectId });
			let data = await Collection.update(target , data);

			

		} catch (err) {

			console.log(err);

		}

	})

	socket.on('delete-collection' , async(data) => {

		try{

			let target = await Collection.find({ _id : data._objectId });
			let data = await Collection.delete(target , data);

			

		} catch (err) {

			console.log(err);

		}

	})

	

};
