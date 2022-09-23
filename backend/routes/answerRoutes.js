const express = require('express')
const router = express.Router()
const { 
    fetchAnswer, 
    addAnswer, 
    updateAnswer, 
    deleteAnswer } = require('../controllers/answerController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, fetchAnswer) .post(protect, addAnswer)
        
router.route('/:id').put(protect, updateAnswer).delete(protect, deleteAnswer)            



module.exports = router