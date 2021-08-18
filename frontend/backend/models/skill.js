import { Schema, model } from "mongoose";

const skillSchema = new Schema({
    name: String,
    port: Number,
    background: String,
    color: String,
    clases: String,
});

export default model("Skill", skillSchema);
