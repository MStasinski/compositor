import mongoose from 'mongoose';
import uuid from 'uuid';

const Schema = mongoose.Schema;

const Question = {
    id: String,
    section: String,
    theme: String,
    url: String
};

const Theme = {
    id: String,
    name: String,
    questions: [Question]
};

const sectionSchema = new Schema({
    id: String,
    name: String,
    themes: [Theme]
});

sectionSchema.index({'$**': 'text'});

const model = mongoose.model('section', sectionSchema);
export default model;