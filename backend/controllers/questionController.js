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
//use find method by somethin e.g user object. here we get all
    const questions = await Question.find()

    res.status(200).json(questions)
})

//@desc     Post all questions
//@route    POST /api/question
//@access   Private
const addQuestions = asyncHandler(async (req,res) => {
//we check for the text. If it aint there we throw error
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add a question')
    }
//if text is found we use create method to create question
    const question = await Question.create({
        text: req.body.text,
    })

    res.status(200).json(question)
})


//@desc     Update question
//@route    PUT /api/question
//@access   Private
const updateQuestion = asyncHandler(async (req,res) => {
//we first find the question we need to update using the findById method
    const question = await Question.findById(req.params.id)

//we check to make sure we have the id. If its not there we throw error
    if(!question) {
        res.status(400)
        throw new Error('Question not found')
    }

//to update a question we use the findByIdAndUpdate method and pass in our id and 2 other arguments
    const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedQuestion)
})                                    

//@desc     Delete question
//@route    DELETE /api/question
//@access   Private
const deleteQuestion = asyncHandler(async (req,res) => {
//to delete a question we first find the question we want to delete 

    const question = await Question.findById(req.params.id)

    if(!question) {
        res.status(400)
        throw new Error('Question not found')
    }
//After the question is found we use the remove method to delete it
//no need to store it in a variable because it wont exist
    await question.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    fetchQuestion,
    fetchQuestions,
    addQuestions,
    updateQuestion,
    deleteQuestion 
}