import { Router } from 'express'
const router = Router()
import { fetchQuestion, fetchQuestions, addQuestions, deleteQuestion, updateQuestion } from '../controllers/questionController'

import { protect } from '../middleware/authMiddleware'
'../middleware/authMiddleware'.default

router.route('/:id').get(protect, fetchQuestion).put(protect, updateQuestion).delete(protect, deleteQuestion)


router.route('/').get(protect, fetchQuestions).post(protect, addQuestions)
      
export default router