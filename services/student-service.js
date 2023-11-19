const personController = require("../controllers/person-controller");

const getStudents = (req) => {
    return personController.getPersonById(req);
}

const addStudent = (newStudent, callback) => {
    return personController.createPerson(req);
}

module.exports = {
    getStudents,
    addStudent
}
