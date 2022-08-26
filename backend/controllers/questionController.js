
const { test } = require("express")

// Json questions array
let Questions = [
    {id: 1, question: 'Why is the sky blue?', order: 1, completed: true, createdOn: new Date()},
    {id: 2, question: 'cest quelle heure ?', order: 2, completed: true, createdOn: new Date()},
    {id: 3, question: 'Dónde está la piscina', order: 3, completed: true, createdOn: new Date()},
    {id: 4, question: 'unafanya nini?', order: 4, completed: true, createdOn: new Date()},
    {id: 5, question: 'Emmele eli wa?', order: 5, completed: false, createdOn: new Date()},
    {id: 6, question: 'Est-ce qu’elles ont mangé ?', order: 6, completed: false, createdOn: new Date()},
]

//@desc     Get question
//@route    GET /api/question
//@access   Private

const fetchQuestion = (req,res) => { 
        // find an object from 'Questions' array matched by id
    let found = Questions.find(question => question.id === parseInt(req.params.id))

    //To check if item is found and if found, return an object or else return not-found 404
    if(found) {
        res.status(200).json(found)
    } else {
        res.sendStatus(404)
    }
}

//@desc     Get questions
//@route    GET /api/question
//@access   Private
const fetchQuestions = (req,res) => {
    res.status(200).json(Questions)
}

//@desc     Post question / add an object to questions array
//@route    POST /api/question
//@access   Private
const addQuestion = (req,res) => {
  
    res.status(201).json(newQuestion)
}

//@desc     Post all questions
//@route    POST /api/question
//@access   Private
const addQuestions = (req,res) => {
      // get questionIds from questions array
      let questionIds = Questions.map(question => question.id)

      // lets create a new id (+1 of last question object)
      let newId = questionIds.length > 0 ? Math.max.apply(Math, questionIds) + 1 : 1
      
      // get the order from the questions array
      let orderNums = Questions.map(question => question.order)
  
      // lets create a new order number (+1 of last questions object)
      let newOrderNum = orderNums.length > 0 ? Math.max.apply(Math, orderNums) + 1 : 1
  
      // create an object of a new question (basically create a new question)
      let newQuestion = {
          id: newId, // we generated this above
          question: req.body.question, //this is the value of the question from the POST request
          order: newOrderNum, // the order position generated above
          completed: false, //default value is set to false
          createdOn: new Date() // new date object
      }
  
  
      // lets push the new question object to the questions array
      // and return with status 201
      // 201 means Created. The request has been fulfilled and 
      // has resulted in one or more new resources being created.
  
      Questions.push(newQuestion)
      res.status(201).json(newQuestion)
    }

//@desc     Update question
//@route    PUT /api/question
//@access   Private

//To update an existing object, we get the 'id' and 'question'(the question or specific resource
// we want updated) from the api end-point
const updateQuestion = (req,res) => {
    // get the question object matched by its 'id'
    let found = Questions.find(question => question.id === parseInt(req.params.id))

    // check if the question is found
    if(found) {
        let updated = {
            id: found.id,
            title: req.body.question, // set the value of 'question' get from req
            order: req.body.order, // set the value of 'order' get from req
            completed: req.body.completed //set the value of 'completed' get from req
        }

        // find the index of found object from the Questions array
        let targetIndex = Questions.indexOf(found)

        // replace the object from Questions list with 'updated' object
        // and return with status 204

        // The success status response code 204 indicates
        // that the request has succeeded
        Questions.splice(targetIndex, 1, updated)

        res.sendStatus(204)
    } else  {
        res.sendStatus(404)
    }

}

//@desc     Delete question
//@route    DELETE /api/question
//@access   Private

//To Delete an existing object from Questions array, we match by 'id', 
//find the question and then we delete it
const deleteQuestion = (req,res) => {
    let found = Questions.find(question => 
        question.id === parseInt(req.params.id))
        // if the question is found then find the index at which the item is
        // stored in the `Questions` array

        if (found) {
            let targetIndex = Questions.indexOf(found)

        // Lets delete the question using splice. 
        // Using splice means we delete the question from Questions array using index
            Questions.splice(targetIndex, 1)
        }

        // return with status 204 which indicates success
        res.sendStatus(204)

}

module.exports = {
    fetchQuestion,
    fetchQuestions,
    addQuestion,
    addQuestions,
    updateQuestion,
    deleteQuestion 
}