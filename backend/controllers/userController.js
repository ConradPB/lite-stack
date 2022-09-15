const jwt = require('jsonwebtoken')

//To hash or encrypt passwords
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


//@desc     Register new user
//@route    POST /api/users
//@access   Public
//when we send a post request to api/users we will have body data 
const registerUser = asyncHandler(async(req,res)  =>  {
//destructure the body data
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    //Check to see if the user exists
    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400)
        throw new error('User already exists')
    }

    //Hash the password (we do that by first creating a salt)
    //call a bcrypt method genSalt. 10 is default
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    //Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

//@desc     Authenticate a user (login)
//@route    POST /api/users/login
//@access   Public
const loginUser = asyncHandler(async(req,res)  =>  {
    const {email, password} = req.body

    //Check for user email
    const user = await User.findOne({email})

    //Check for user password and compare it
    //use a bcrypt method called compare to compare hashed pw
    //with one sent
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)

        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// Generate JWT

// This will sign a new token with the id thats passed in 
//with the secret used and will expire in 60 days
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '60d'} )
}

//@desc     Get user data
//@route    GET /api/users/me 
//(Gets current logged in users Id coz we will be sending a token from which we get the id)
//@access   Public
const getMe = asyncHandler(async(req,res)  =>  {
    res.json({ message: 'Display user data' })
})


module.exports = {
    registerUser,
    loginUser,
    getMe,
}