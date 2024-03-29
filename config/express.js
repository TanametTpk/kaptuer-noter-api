const express = require("express")
const http = require("http")
const middleware = require("./middlewares")
const cors = require("cors")

module.exports = function(){

	var app = express();
	const server = http.createServer(app);

	app.use(cors())
	app.use(express.json());
	app.use(middleware.customResponses);
	app.use(middleware.logger);


	require( "./mongoose" )(app);
	app.use(require( "../app/routes" ));


	return {
		app:app,
		server:server,
	};
}
