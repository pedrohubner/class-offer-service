const express = require('express')
const router = express.Router();
const studentService = require('../services/student-service');

router.get('/students', (req, res) => {
    studentService.getStudents((err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

router.post('/students', (req, res) => {
    const newStudent = req.body;
    studentService.addStudent(newStudent, (err, result) => {
        if (err) throw err;
        res.status(201).send(`Student added: ${result}`)
    })
})

module.exports = router;