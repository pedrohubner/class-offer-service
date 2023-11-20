const personController = require("../controllers/person");

const getStudents = (req) => {
    return personController.getPersonById(req);
}

const addStudent = (req) => {
    return personController.createPerson(req);
}

module.exports = {
    getStudents,
    addStudent
}
