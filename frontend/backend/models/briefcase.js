import {Schema, model} from 'mongoose';

const briefcaseSchema = new Schema({
    title: String,
    description: String,
    background: String,
    color: String,
    iconUrl: [String],
    link: String,
    portImg: String, 
    category: String,
});

export default model("Briefcase", briefcaseSchema);