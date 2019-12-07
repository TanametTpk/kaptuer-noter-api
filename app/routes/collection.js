const middlewares = require( "../../config/middlewares" );
const collection = require( "../controllers/collection" );
const express = require( "express" );
const router = express.Router();

router.get("/", middlewares.getterPopulate , collection.get);

router.get("/pages/:page", middlewares.getterPagination, middlewares.getterPopulate, collection.getPagination);

router.get("/:objectId", middlewares.getterObjectId, middlewares.getterPopulate, collection.getSpecific);

router.post("/", collection.create);

router.put("/:objectId", middlewares.getterObjectId, collection.update);

router.delete("/:objectId", middlewares.getterObjectId, collection.delete);


module.exports = router;
