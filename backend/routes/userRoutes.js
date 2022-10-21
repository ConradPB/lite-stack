import { Router } from 'express'
const router = Router()

import { registerUser, loginUser, getMe } from '../controllers/userController'
import { protect } from '../middleware/authMiddleware'
'../middleware/authMiddleware'.default

//Lets add or register a user with a POST 
//and call our controller fn for registerUser
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect,  getMe)

export default router