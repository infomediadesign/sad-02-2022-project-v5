const usermodel = require("../models/usermodel");

//creating jwt token
const maxAge = 3 * 24 * 60 * 60;
const jwt = require("jsonwebtoken");
const createToken = (id) => {
    return jwt.sign({ id }, "smrutipuranikkey", {
        expiresIn: maxAge,
    });
};

const handleErrors = (err) => {
    let errors = { email: "", password: "" };

    if (err.message === "Incorrect email")
        errors.email = "This email is not registered";

    if (err.message === "Incorrect password")
        errors.email = "This password is incorrect";

    if (err.code === 11000) {
        errors.email = "Email is already registered";
        return errors;
    }

    if (err.message.includes("User validation failed")) {
        Object.values(err.erros).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;


};

module.exports.register = async(req, res, next) => {
    try {
        console.log("inside register backend")
        console.log(req);
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
        const errors = handleErrors(err);
        res.json({ errors, created: false });
    }
};
module.exports.signin = async(req, res, next) => {
    try {
        console.log("inside register backend")
        console.log(req);
        const { email, password } = req.body;
        const user = await usermodel.signin(email, password);
        //after user is created
        const token = createToken(user._id);
        res.cookie("jwt", token, {
            withCredentials: true,
            httpOnly: false, //will be passed from another domain or port
            maxAge: maxAge * 1000,
        });
        res.status(200).json({ user: user._id, created: true });
    } catch (err) {
        console.log(err);
        const errors = handleErrors(err);
        res.json({ errors, created: false });
    }
};