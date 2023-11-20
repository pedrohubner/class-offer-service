const personController = require("../controllers/person");

const getTeacher = (req) => {
    return personController.getPersonById(req);
}


const addTeacher = (req) => {
    return personController.createPerson(req);
}

module.exports = {
    getTeacher,
    addTeacher
}