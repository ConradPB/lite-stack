const express = require('express')
const router = express.Router()

router.get('/:id', (req,res) => {
    res.status(200).json({message: `Fetch question ${req.params.id}`})})


router.get('/', (req,res) => {
    res.status(200).json({message: 'Fetch all questions'})}) 
        
router.post('/:id', (req,res) => {
    res.status(200).json({message: `Add question ${req.params.id}`})})
            
            
router.post('/', (req,res) => {
    res.status(200).json({message: 'Add all questions'})})

router.put('/:id', (req,res) => {
    res.status(200).json({message: `Update question ${req.params.id}`})})                


router.delete('/:id', (req,res) => {
    res.status(200).json({message: `Delete question ${req.params.id}`})})

module.exports = router