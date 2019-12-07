const middlewares = require( "../../config/middlewares" );
const note = require( "../controllers/note" );
const express = require( "express" );
const router = express.Router();

router.get("/", middlewares.getterPopulate , note.get);

router.get("/pages/:page", middlewares.getterPagination, middlewares.getterPopulate, note.getPagination);

router.get("/:objectId", middlewares.getterObjectId, middlewares.getterPopulate, note.getSpecific);

router.post("/", note.create);

router.put("/:objectId", middlewares.getterObjectId, note.update);

router.delete("/:objectId", middlewares.getterObjectId, note.delete);





module.exports = router;
