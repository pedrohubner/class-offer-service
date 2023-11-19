const express = require('express')
const router = express.Router();
const studentService = require('../services/student-service');

router.get('/students', (req, res) => {
    let obj = studentService.getStudents(req);
    res.status(200).send(obj);
})

router.post('/students', (req, res) => {
    let obj = studentService.addStudent(req);
    res.status(201).send(obj);
})

module.exports = router;