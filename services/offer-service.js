module.exports = {
    getClassesForStudents,
    getClassesForTeachers,
    registerClassOffer,
    registerStudentOrPersonToClassOffer
}

const offerController = require("../controllers/offer-controller")
const personController = require("../controllers/person-controller")

function registerClassOffer(req, res) {
    return offerController.createClassOffer(req, res);
}

function getClassesForStudents(req, res) {
    const classes = offerController.getClassOffers(req, res);
    if (!classes.length) return [];
    const filteredClasses = classes.filter(curso => filterStudentAvailableClasses(request, curso));
    return getFilteredClasses(filteredClasses);
}

function filterStudentAvailableClasses(request, curso) {
    return request.hasVacancies === curso.hasStudentVacancies
        && isEquals(request.period, curso.period)
        && isEquals(request.schoolDays, curso.schoolDays);
}

function getClassesForTeachers(req, res) {
    const classes = offerController.getClassOffers(req, res);
    if (!classes.length) return [];
    const filteredClasses = classes.filter(curso => filterTeacherAvailableClasses(request, curso));
    return getFilteredClasses(filteredClasses);
}

function filterTeacherAvailableClasses(request, curso) {
    return request.hasVacancies === curso.hasTeacherVacancies
        && isEquals(request.period, curso.period)
        && isEquals(request.schoolDays, curso.schoolDays);
}

function isEquals(request, curso) {
    return isNullOrUndefined(request) ? true : request === curso;
}

function getFilteredClasses(filteredClasses) {
    if (filteredClasses.length === 0) {
        throw new NoAvailableClassesError('No classes available for the specified criteria.');
    }
    return filteredClasses;
}

function registerStudentOrPersonToClassOffer(request) {
    const person = personController.getPersonById(request);
    const classOffer = offerController.getClassOfferById(request);

    if (!classOffer.hasTeacherVacancies && !classOffer.hasStudentVacancies) {
        throw new Error("Não possui mais vaga");
    }

    if (type === TipoPessoaEnum.PROFESSOR) {
        classOffer.hasTeacherVacancies = false;
        person.classes.push(classOffer);
        offerController.updateClassOffer(classOffer);
        personController.updatePerson(person);
        return person;
    }

    const newMaximumNumberOfStudents = classOffer.maximumNumberOfStudents - 1;
    classOffer.hasStudentVacancies = newMaximumNumberOfStudents !== 0;
    person.classes.push(classOffer);
    offerController.updateClassOffer(classOffer);
    personController.updatePerson(person);
    return person;
}
