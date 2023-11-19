const service = require("../services/offer");

const postOffer = function (app) {
    app.post('/offer-route', (req, res) => {
        let obj = service.registerClassOffer(req);
        res.status(201).send(obj);
    });
};

const getStudentOffer =  function (app) {
    app.get('/offer-route/students', (req, res) => {
        let obj = service.getClassesForStudents(req);
        res.status(200).send(obj);
    });
};

const getTeachersOffer = function (app) {
    app.get('/offer-route/teachers', (req, res) => {
        let obj = service.getClassesForTeachers(req);
        res.status(200).send(obj);
    });
};

const patchOffer =  function (app) {
    app.patch('/offer-route', (req, res) => {
        let obj = service.registerStudentOrPersonToClassOffer(req);
        res.status(200).send(obj);
    });
};

module.exports = function (app) {
    postOffer(app);
    getStudentOffer(app);
    getTeachersOffer(app);
    patchOffer(app);
}