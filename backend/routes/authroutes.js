const { register, signin } = require("../controllers/authcontrollers");

const routes = require("express").Router(); //calling router function

router.post("/"); //we will have checkuser middlewares 
router.post("/register", register);
router.post("/signin", signin);

module.exports = router;