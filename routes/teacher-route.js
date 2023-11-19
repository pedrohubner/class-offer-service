const express = require('express')
const router = express.Router()
const teacherService = require('../services/teacher-service')

router.get('/teacher', (req, res) => {
    let obj = teacherService.getTeacher(req);
    res.status(200).send(obj);
})


router.post('/teacher', (req, res) => {
    let obj = teacherService.addTeacher(req);
    res.status(201).send(obj);
})

module.exports = router 