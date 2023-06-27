import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    course: {
      type: String,
      enum: ["Computer Science", "Electronics", "Mechanical", "IT", "Civil"],
      required: true,
    },
    college: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const model = mongoose.model("Student", StudentSchema);
export default model;
