const express = require('express')
const router = express.Router()
const { 
    fetchQuestion, 
    fetchQuestions,  
    addQuestions, 
    deleteQuestion, 
    updateQuestion } = require('../controllers/questionController')

router.route('/:id').get(fetchQuestion).put(updateQuestion).delete(deleteQuestion)


router.route('/').get(fetchQuestions).post(addQuestions)
      
module.exports = router