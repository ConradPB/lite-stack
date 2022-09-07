const asyncHandler = require('express-async-handler')
const Question = require('../models/questionModel')

//@desc     Get question
//@route    GET /api/question
//@access   Private
const fetchQuestion = asyncHandler(async (req,res) => {
    
    res.status(200).json({message: `Fetch question ${req.params.id}`})
})

//@desc     Get questions
//@route    GET /api/question
//@access   Private
const fetchQuestions = asyncHandler(async (req,res) => {
    const questions = await Question.find()

    res.status(200).json(questions)
})

//@desc     Post question
//@route    POST /api/question
//@access   Private
const addQuestion = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Add question ${req.params.id}`})
})

//@desc     Post all questions
//@route    POST /api/question
//@access   Private
const addQuestions = asyncHandler(async (req,res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add some info in the field')
    }

    const question = await Question.create({
        text: req.body.text,
    })

    res.status(200).json(question)
})


//@desc     Update question
//@route    PUT /api/question
//@access   Private
const updateQuestion = asyncHandler(async (req,res) => {
    const question = await Question.findById(req.params.id)

    if(!question) {
        res.status(400)
        throw new Error('Question not found')
    }

    const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedQuestion)
})                                    

//@desc     Delete question
//@route    DELETE /api/question
//@access   Private
const deleteQuestion = asyncHandler(async (req,res) => {
    const question = await Question.findById(req.params.id)

    if(!question) {
        res.status(400)
        throw new Error('Question not found')
    }

    await question.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    fetchQuestion,
    fetchQuestions,
    addQuestion,
    addQuestions,
    updateQuestion,
    deleteQuestion 
}