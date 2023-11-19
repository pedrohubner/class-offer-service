const teacherService = require('../services/teacher');

const getTeacher = function (app) {
    app.get('/teacher', (req, res) => {
        const obj = teacherService.getTeacher(req);
        res.status(200).send(obj);
    })
}

const postTeacher = function (app) {
    app.post('/teacher', (req, res) => {
        const obj = teacherService.addTeacher(req);
        res.status(201).send(obj);
    })
}

module.exports = function (app) {
    getTeacher(app);
    postTeacher(app);
};