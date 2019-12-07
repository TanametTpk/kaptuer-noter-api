const Note = require('../../app/classes/note');

module.exports = (socket) => {

	socket.on('create-note' , async(data) => {

		try{

			let data = await Note.create(data);

			

		} catch (err) {

			console.log(err);

		}

	})

	socket.on('update-note' , async(data) => {

		try{

			let target = await Note.find({ _id : data._objectId });
			let data = await Note.update(target , data);

			

		} catch (err) {

			console.log(err);

		}

	})

	socket.on('delete-note' , async(data) => {

		try{

			let target = await Note.find({ _id : data._objectId });
			let data = await Note.delete(target , data);

			

		} catch (err) {

			console.log(err);

		}

	})

	

};
