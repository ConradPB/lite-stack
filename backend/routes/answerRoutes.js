const express = require('express')
const router = express.Router()

const { 
    fetchAnswer, 
    addAnswer, 
    updateAnswer, 
    deleteAnswer } = require('../controllers/answerController')

router.route('/').get(fetchAnswer) 
        
router.route('/:id').post(addAnswer).put(updateAnswer).delete(deleteAnswer)            



module.exports = router