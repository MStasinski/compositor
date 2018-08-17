import mongoose from 'mongoose';
import uuid from 'uuid';

const Schema = mongoose.Schema;


const Question = {
    id: String,
    section: String,
    theme:String,
    url: String
};

const themeSchema = new Schema({
    id: String,
    name: String,
    questions: [Question]
});

themeSchema.index({'$**': 'text'});

const model = mongoose.model('theme', themeSchema);
export default model;