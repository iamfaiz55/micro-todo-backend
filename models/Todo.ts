const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        task: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        priority: {
            type: String,
            required: true,
        },
        isComplete: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const Todo = mongoose.model("todo", todoSchema);
export default Todo;

