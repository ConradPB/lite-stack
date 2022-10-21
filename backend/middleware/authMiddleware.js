import { verify } from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import { findById } from '../models/userModel'

const protect = asyncHandler(async (req,res, next) => { 
    let token 
    //check for authorization header making sure its a bearer token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1]

            // Decode and Verify token
            const decoded = verify(token, process.env.JWT_SECRET)

            // Get user from the token
            req.user = await findById(decoded.id).select('-password')

            //call next piece of middleware
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error ('Not authorized')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

export default { protect }