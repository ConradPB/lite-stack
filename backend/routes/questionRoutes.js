const express = require('express')
const router = express.Router()
const { 
    fetchQuestion, 
    fetchQuestions,  
    addQuestions, 
    deleteQuestion, 
    updateQuestion } = require('../controllers/questionController')

const {protect} = require('../middleware/authMiddleware')

router.route('/:id').get(fetchQuestion).put(protect, updateQuestion).delete(protect, deleteQuestion)


router.route('/').get(protect, fetchQuestions).post(protect, addQuestions)
      
module.exports = router