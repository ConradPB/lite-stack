const express = require('express')
const router = express.Router()
const { 
    fetchQuestion, 
    fetchQuestions, 
    addQuestion, 
    addQuestions, 
    deleteQuestion, 
    updateQuestion } = require('../controllers/questionController')



router.route('/:id').get(fetchQuestion).post(addQuestion).put(updateQuestion).delete(deleteQuestion)


router.route('/').get(fetchQuestions).post(addQuestions)
      
module.exports = router