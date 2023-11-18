const service = require("../services/offer-service");

module.exports = function (app) {
    app.post('/class-offer', (req, res) => {
        let obj = service.registerClassOffer(req);
        res.status(201).send(obj);
    });
};

module.exports = function (app) {
    app.get('/class-offer/students', (req, res) => {
        let obj = service.getClassesForStudents(req);
        res.status(200).send(obj);
    });
};

module.exports = function (app) {
    app.get('/class-offer/teachers', (req, res) => {
        let obj = service.getClassesForTeachers(req);
        res.status(200).send(obj);
    });
};

module.exports = function (app) {
    app.patch('/class-offer', (req, res) => {
        let obj = service.registerStudentOrPersonToClassOffer(req);
        res.status(200).send(obj);
    });
};
