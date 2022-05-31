const { register, signin } = require("../controllers/authcontrollers");

const router = require("express").Router(); //calling router function

router.post("/", checkUser); //we will have checkuser middlewares 
router.post("/register", register);
router.post("/signin", signin);

module.exports = router;