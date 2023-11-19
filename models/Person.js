import { Schema, model } from 'mongoose';
import ClassOfferSchema from './ClassOffer';

const personSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    document: { type: String, required: true },
    email: { type: String, required: true },
    type: { type: String, enum: ['TEACHER', 'STUDENT'], required: true },
    maximumNumberOfClasses: { type: Number, required: true },
    classes: [{ type: Schema.Types.ObjectId, ref: 'ClassOffer' }],
});

const Person = model('Person', personSchema);

export default Person;