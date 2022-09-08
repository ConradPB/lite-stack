
let Answers = [
    {id: 1, answer: 'We see a blue sky because blue travels as shorter, smaller waves. So blue light is scattered in all directions by tiny air molecules in the Earths atmosphere.', 
    order: 1, completed: true, createdOn: new Date()},
    {id: 2, answer: 'Il est vingt-trois heures.', order: 2, completed: true, createdOn: new Date()},
    {id: 3, answer: 'La piscina está en la azotea del hotel.', order: 3, completed: true, createdOn: new Date()},
    {id: 4, answer: ' Ninafanya kazi ya ziada.', order: 4, completed: true, createdOn: new Date()},
    {id: 5, answer: 'Teba naba kujifumba. Kakana nawe.', order: 5, completed: false, createdOn: new Date()},
    {id: 6, answer: 'elles mangé les pomme et les chocolat.', order: 6, completed: false, createdOn: new Date()},
]


//@desc     Get answer
//@route    GET /api/answer
//@access   Private
const fetchAnswer = (req,res) => {

    let found = Answers.find(answer => answer.id === parseInt(req.params.id))

    if(found) {
        res.status(200).json(found)
    } else {
        res.sendStatus(404)
    }
}

//@desc     Post answer
//@route    POST /api/answer
//@access   Private
const addAnswer = (req,res) => {
        let answerIds = Answers.map(answer => answer.id)

        let newId = answerIds.length > 0 ? Math.max.apply(Math, answerIds) + 1 : 1
        
        let orderNums = Answers.map(answer => answer.order)
    
        let newOrderNum = orderNums.length > 0 ? Math.max.apply(Math, orderNums) + 1 : 1
    
        let newAnswer = {
            id: newId, 
            answer: req.body.answer, 
            order: newOrderNum, 
            completed: false, 
            createdOn: new Date() 
        }
    
    
       Answers.push(newAnswer)
        res.status(201).json(newAnswer)

}

//@desc     Update answer
//@route    PUT /api/answer
//@access   Private
const updateAnswer = (req,res) => {

    let found = Answers.find(answer => answer.id === parseInt(req.params.id))

    if(found) {
        let updated = {
            id: found.id,
            title: req.body.answer, 
            order: req.body.order, 
            completed: req.body.completed 
        }

        let targetIndex = Answers.indexOf(found)

        Answers.splice(targetIndex, 1, updated)

        res.sendStatus(204)
    } else  {
        res.sendStatus(404)
    }
}

//@desc     Delete answer
//@route    DELETE /api/answer
//@access   Private
const deleteAnswer = (req,res) => {

    let found = Answers.find(answer => 
        answer.id === parseInt(req.params.id))

        if (found) {
            let targetIndex = Answers.indexOf(found)

            Answers.splice(targetIndex, 1)
        }

        res.sendStatus(204)
}


module.exports = {
    fetchAnswer,
    addAnswer,
    updateAnswer,
    deleteAnswer
}