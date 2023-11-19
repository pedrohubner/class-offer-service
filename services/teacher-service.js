const personController = require("../controllers/person-controller");

const getTeacher = (req) => {
    return personController.getPersonById(req);
}


const addTeacher = (newTeacher, callback) => {
    return personController.createPerson(req);
}

module.exports = {
    getTeacher,
    addTeacher
}