const express = require("express")
const cors = require("cors")
const userRouter = express.Router();
const { check } = require('express-validator')
const { addUser, getUser } = require("../controllers/user")


// @route GET /api/getUser
// @desc get user info
// @access Public
userRouter.get("/getUser/:username", getUser);

// @route POST /api/getUser
// @desc Post user info
// @access Public
userRouter.post("/addUser",
    [
        check('name', 'Name is required!').notEmpty(),
        check('username', 'Username is required!').notEmpty(),
        check('email', 'Email is required').notEmpty().isEmail()
    ],
    addUser
);

module.exports = userRouter;