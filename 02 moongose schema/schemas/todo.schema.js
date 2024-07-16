import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    done : {
        type: Boolean,
        required: true,
        default: false
    }
},{timestamps: true});

export const Todo = mongoose.model("Todo", todoSchema);
