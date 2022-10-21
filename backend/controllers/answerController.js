import asyncHandler from 'express-async-handler'
import { find, create, findById, findByIdAndUpdate } from '../models/answerModel'

//@desc     Get answer
//@route    GET /api/answer
//@access   Private
const fetchAnswer = asyncHandler(async(req,res) => {
    const answers = await find({ question: req.body.findById})
    res.status(200).json(answers)
})

//@desc     Post answer
//@route    POST /api/answer
//@access   Private
const addAnswer = asyncHandler(async(req,res) => {
  
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add an answer') 
    }
    const answer = await create({
        text: req.body.text,
    })

    res.status(200).json(answer)
})

//@desc     Update answer
//@route    PUT /api/answer
//@access   Private
const updateAnswer = asyncHandler(async(req,res) => {

    const answer = await findById(req.params.id)

    if(!answer) {
        res.status(400)
        throw new Error('Answer not found')
    }

    const updatedAnswer = await findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedAnswer)
})

//@desc     Delete answer
//@route    DELETE /api/answer
//@access   Private
const deleteAnswer = asyncHandler(async(req,res) => {
    const answer = await findById(req.params.id)

    if(!answer) {
        res.status(400)
        throw new Error('Question not found') 
    }

    await answer.remove()
    res.status(200).json({ id: req.params.id })
})



export default {
    fetchAnswer,
    addAnswer,
    updateAnswer,
    deleteAnswer
}