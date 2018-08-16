import mongoose from 'mongoose';
import uuid from 'uuid';

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    id: String,
    section: String,
    theme: String,
    url: String
});

questionSchema.index({'$**': 'text'});

const model = mongoose.model('question', questionSchema);
export default model;