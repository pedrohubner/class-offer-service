module.exports = {
    getClassesForStudents,
    getClassesForTeachers,
    registerClassOffer,
    registerStudentOrPersonToClassOffer
}

function registerClassOffer(request) {
    return [];
}

function getClassesForStudents(request) {
    const classes = buildClassesForStudents();
    if (!classes.length) return [];

    return classes
        .filter(curso => filterStudentAvailableClasses(request, curso));
}

function filterStudentAvailableClasses(request, curso) {
    return request.hasVacancies === curso.hasStudentVacancies
        && isEquals(request.period, curso.period)
        && isEquals(request.schoolDays, curso.schoolDays);
}

function isEquals(request, curso) {
    return isNullOrUndefined(request) ? true : request === curso;
}

function buildClassesForStudents() {
    const cursos = [];
    const curso = {
        id: 1,
        title: "Programação Back-End",
        maximumNumberOfStudents: 80,
        type: "SEMI_ANNUAL",
        initialDate: "2024-02-15",
        finalDate: "2024-06-15",
        schoolDays: "WEDNESDAY",
        period: "AFTERNOON",
        openingTime: 14,
        closingTime: 15,
        hasStudentVacancies: true
    };
    cursos.push(curso);
    return cursos;
}

function getClassesForTeachers(request) {
    const classes = buildClassesForTeachers();
    if (!classes.length) return [];

    return classes
        .filter(curso => filterTeacherAvailableClasses(request, curso));
}

function filterTeacherAvailableClasses(request, curso) {
    return request.hasVacancies === curso.hasTeacherVacancies
        && isEquals(request.period, curso.period)
        && isEquals(request.schoolDays, curso.schoolDays);
}

function buildClassesForTeachers() {
    const cursos = [];
    const curso = {
        id: 1,
        title: "Programação Back-End",
        maximumNumberOfStudents: 80,
        type: "SEMI_ANNUAL",
        initialDate: "2024-02-15",
        finalDate: "2024-06-15",
        schoolDays: "WEDNESDAY",
        period: "AFTERNOON",
        openingTime: 14,
        closingTime: 15,
        hasTeacherVacancies: true
    };
    cursos.push(curso);
    return cursos;
}

function registerStudentOrPersonToClassOffer(request) {
    const person = getPersonId(request.userId, request.type);
    const classOffer = getClassOfferById(request.classOfferId);

    if (!classOffer.hasTeacherVacancies && !classOffer.hasStudentVacancies) {
        throw new Error("Não possui mais vaga");
    }

    if (type === TipoPessoaEnum.PROFESSOR) {
        classOffer.hasTeacherVacancies = false;
        person.classes.push(classOffer);
        //salvar matéria pra não ter mais vaga
        //salvar usuário para persistir classe
        return person;
    }

    const newMaximumNumberOfStudents = classOffer.maximumNumberOfStudents - 1;
    classOffer.hasStudentVacancies = newMaximumNumberOfStudents !== 0;
    person.classes.push(classOffer);
    //salvar matéria pra não ter mais vaga
    //salvar usuário para persistir classe
    return person;
}

function getClassOfferById(id) {
    const curso = new Curso();
    curso.id = 1;
    curso.title = "Programação Back-End";
    curso.maximumNumberOfStudents = 80;
    curso.type = "SEMI_ANNUAL";
    curso.initialDate = "2024-02-15";
    curso.finalDate = "2024-06-15";
    curso.schoolDays = "WEDNESDAY";
    curso.period = "AFTERNOON";
    curso.openingTime = 14;
    curso.closingTime = 15;
    curso.hasTeacherVacancies = true;
    curso.hasStudentVacancies = true;
    return curso;
}

function getPersonId(id, type) {
    if (type === TipoPessoaEnum.PROFESSOR) return professor();
    return aluno();
}

function professor() {
    const usuario = new UsuarioService.Usuario();
    usuario.id = 1;
    usuario.name = "JOAO SILVA";
    usuario.type = TipoPessoaEnum.PROFESSOR;
    usuario.document = "0123456789";
    usuario.email = "joaosilva@gmail.com";
    usuario.maximumNumberOfClasses = 6;
    usuario.classes = [];
    return usuario;
}

function aluno() {
    const usuario = new UsuarioService.Usuario();
    usuario.id = 1;
    usuario.name = "JOAO SILVA";
    usuario.type = TipoPessoaEnum.ALUNO;
    usuario.document = "0123456789";
    usuario.email = "joaosilva@gmail.com";
    usuario.maximumNumberOfClasses = 6;
    usuario.classes = [];
    return usuario;
}