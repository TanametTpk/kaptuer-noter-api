const router = require( "express" ).Router();
const middlewares = require( "../../config/middlewares" );
const collection = require( "./collection" );
const note = require( "./note" );

const overrideAuth = (req , res , next) => {
    req.query = { ...req.query, user:req.user._id }
    req.body = { ...req.body, user:req.user._id }
    next()
}

router.use(middlewares.validateToken);
router.use("/collection", overrideAuth ,collection);
router.use("/note", note);


module.exports = router;
