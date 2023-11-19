const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const classOfferSchema = new Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    maximumNumberOfStudents: { type: Number, required: true },
    type: { type: String, enum: ['SEMESTER', 'BIMONTHLY'], required: true },
    initialDate: { type: String, required: true },
    finalDate: { type: String, required: true },
    schoolDays: { type: String, required: true },
    period: { type: String, required: true },
    openingTime: { type: Number, required: true },
    closingTime: { type: Number, required: true },
    hasStudentVacancies: { type: Boolean, required: true },
    hasTeacherVacancies: { type: Boolean, required: true },
});

const ClassOffer = model('ClassOffer', classOfferSchema);

module.exports = {
    ClassOffer,
    classOfferSchema
}