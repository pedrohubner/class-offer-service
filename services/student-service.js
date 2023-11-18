const getStudents = (callback) => {
    db.collection('students').find({}).toArray(callback)
}

const addStudent = (newStudent, callback) => {
    db.collection('students').insertOne(newStudent, callback)
}

module.exports = {
    getStudents,
    addStudent
}