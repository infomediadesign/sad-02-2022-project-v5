const usermodel = require("../models/usermodel");

//creating jwt token
const maxAge = 3 * 24 * 60 * 60;
const jwt = require("jsonwebtoken");
const createToken = (id) => {
    return jwt.sign({ id }, "smrutipuranikkey", {
        expiresIn: maxAge,
    });
};

module.exports.register = async(req, res, next) => {
    try {
        console.log("inside register backend")
        const { email, password } = req.body;
        const user = await usermodel.create({ email, password });
        //after user is created
        const token = createToken(user._id);
        res.cookie("jwt", token, {
            withCredentials: true,
            httpOnly: false, //will be passed from another domain or port
            maxAge: maxAge * 1000,
        });
        res.status(201).json({ user: user._id, created: true });
    } catch (err) {
        console.log(err);

    }
};
module.exports.signin = async(req, res, next) => {

};