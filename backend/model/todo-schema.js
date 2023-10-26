import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    data: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // default: Date.now(), //why  not?
    },
  },
  { timestamps: true }
);
const todo = mongoose.model("todo", todoSchema);
export default todo;
