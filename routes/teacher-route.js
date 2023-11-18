const express = require('express')
const router = express.Router()
const teacherService = require('../services/teacher-service')

router.get('/teacher', (req, res) => {
    teacherService.getTeacher((err, result) => {
        if(err) throw err;
        res.send(result)
    })
})


router.post('/teacher', (req, res) => {
    const newTeacher = req.body;
    teacherService.addTeacher(newTeacher, (err, result) => {
        if(err) throw err;
        res.status(201).send(`Teacher added ${result}`)
    })
})

module.exports = router 