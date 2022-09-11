const express = require('express')
const router = express.Router()
const { 
    fetchAnswer, 
    addAnswer, 
    updateAnswer, 
    deleteAnswer } = require('../controllers/answerController')

router.route('/').get(fetchAnswer) .post(addAnswer)
        
router.route('/:id').put(updateAnswer).delete(deleteAnswer)            



module.exports = router