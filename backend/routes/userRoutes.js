const express = require('express')
const router = express.Router()

const { 
    registerUser, 
    loginUser, 
    getMe } = require('../controllers/userController')


//Lets add or register a user with a POST 
//and call our controller fn for registerUser
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)

module.exports = router