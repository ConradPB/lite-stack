const express = require('express')
const router = express.Router()

const { 
    fetchAnswer, 
    addAnswer, 
    updateAnswer, 
    deleteAnswer } = require('../controllers/answerController')

router.route('/').post(addAnswer)
        
router.route('/:id').get(fetchAnswer).put(updateAnswer).delete(deleteAnswer)            



module.exports = router