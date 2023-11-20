const { Schema, model } = require('mongoose')

const personSchema = new Schema({
    /* id: { type: Number, required: true }, */
    name: { type: String, required: true },
    document: { type: String, required: true },
    email: { type: String, required: true },
    type: { type: String, enum: ['TEACHER', 'STUDENT'], required: true },
    maximumNumberOfClasses: { type: Number, required: true },
    classes: [{ type: Schema.Types.ObjectId, ref: 'ClassOffer' }],
});

const Person = model('Person', personSchema);

module.exports = {
    Person,
    personSchema
}