//@desc     Get answer
//@route    GET /api/answer
//@access   Private
const fetchAnswer = (req,res) => {
    res.status(200).json({message: 'Fetch all answers'})
}

//@desc     Post answer
//@route    POST /api/answer
//@access   Private
const addAnswer = (req,res) => {

    res.status(200).json({message: `Add answer ${req.params.id}`})
}

//@desc     Update answer
//@route    PUT /api/answer
//@access   Private
const updateAnswer = (req,res) => {
    res.status(200).json({message: `Update answer ${req.params.id}`})
}

//@desc     Delete answer
//@route    DELETE /api/answer
//@access   Private
const deleteAnswer = (req,res) => {
    res.status(200).json({message: `Delete answer ${req.params.id}`})
}


module.exports = {
    fetchAnswer,
    addAnswer,
    updateAnswer,
    deleteAnswer
}