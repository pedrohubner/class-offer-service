const getTeacher = (callback) => {
    db.collection('teachers').find({}).toArray(callback)
}


const addTeacher = (newTeacher, callback) => {
    db.collection('teachers').insertOne(newTeacher, callback)
}

module.exports = {
    getTeacher, 
    addTeacher
}