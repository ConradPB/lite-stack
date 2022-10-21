import { Router } from 'express'
const router = Router()
import { fetchAnswer, addAnswer, updateAnswer, deleteAnswer } from '../controllers/answerController'

import { protect } from '../middleware/authMiddleware'
'../middleware/authMiddleware'.default

router.route('/').get(protect, fetchAnswer) .post(protect, addAnswer)
        
router.route('/:id').put(protect, updateAnswer).delete(protect, deleteAnswer)            



export default router