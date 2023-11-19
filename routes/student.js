const studentService = require('../services/student');

const getStudents = function (app) {
    app.get('/students', (req, res) => {
        const obj = studentService.getStudents(req);
        res.status(200).send(obj);
    })
}

const postStudent = function (app) {
    app.post('/student', (req, res) => {
        const obj = studentService.addStudent(req);
        res.status(201).send(obj);
    })
}

module.exports = function (app) {
    getStudents(app);
    postStudent(app);
};