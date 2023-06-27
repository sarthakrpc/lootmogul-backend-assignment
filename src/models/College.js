import mongoose from "mongoose";

const CollegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    location: {
      country: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
      required: true,
    },
    courses: {
      type: [String],
      enum: ["Computer Science", "Electronics", "Mechanical", "IT", "Civil"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("College", CollegeSchema);
export default model;
