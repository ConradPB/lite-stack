const express = require('express')
const router = express.Router()


router.get('/', (req,res) => {
    res.status(200).json({message: 'Fetch all answers'})}) 
        
router.post('/:id', (req,res) => {
    res.status(200).json({message: `Add answer ${req.params.id}`})})            

router.put('/:id', (req,res) => {
    res.status(200).json({message: `Update answer ${req.params.id}`})})                

router.delete('/:id', (req,res) => {
    res.status(200).json({message: `Delete answer ${req.params.id}`})})



module.exports = router