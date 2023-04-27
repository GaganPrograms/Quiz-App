//5
// This router object can then be used to define routes that 
// handle HTTP requests, such as GET, POST, PUT, and DELETE requests. 
// You can specify the HTTP method and the URL path that the route should handle, 
// and provide a function that defines the logic to execute when the route is requested.

const express = require('express');
const router = express.Router();

const Qmodel = require('./../models/quiz');

// 8th
// submit questions
router.post('/data', (req, res) => {
    let{question, option1, option2, option3, option4, correctOption} = req.body;

    const newQuestion = new Qmodel({
        question,
        option1,
        option2,
        option3,
        option4,
        correctOption
    });
    newQuestion.save().then(result => {
        res.json({
           status: "SUCCESS",
           message: "Question added",
           data: result 
        })
    }) .catch(err => {
        console.log(err)
        res.json({
            status: "FAILED",
            message: "an error occured while adding question"
        })
    })
});

// 9th
// sending questions
router.get('/questions', async (req, res) => {
   try{
    const questions = await Qmodel.find()
    .sort({ createdAt: -1 })
    .limit(10);
    res.json({
        status: "SUCCESS",
        message: "questions fetched",
        data: questions
    });
   }catch(err){
    console.error(err);
    res.status(500).json({
        status: "FAILED",
        status: "an error occured while fetching questions"
    });
   }
});

module.exports = router;