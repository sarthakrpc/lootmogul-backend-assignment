import sendStatuswithData from "../utils/sendStatuswithData.js";
import College from "../models/College.js";
import { getCollegeData } from "../services/collegeService.js";

const getAllColleges = async (req, res) => {
  try {
    const collegeData = await College.find({});

    sendStatuswithData.success(res, collegeData);
  } catch (error) {
    console.log(error);
    sendStatuswithData.serverError(res, "Something went wrong");
  }
};

const getSingleCollege = async (req, res) => {
  try {
    const id = req.params.id;

    const finalData = await getCollegeData(id);

    sendStatuswithData.success(res, finalData);
  } catch (error) {
    console.log(error);
    sendStatuswithData.serverError(res, "Something went wrong");
  }
};

const getSimilarCollege = async (req, res) => {
  try {
    const id = req.params.id;
    const college = await College.findById(id)
      .select("-createdAt -updatedAt -__v")
      .lean();

    const state = college.location.state;
    const rating = college.rating;
    const similarColleges = await College.find({
      "location.state": state,
    }).lean();

    const colleges = similarColleges.filter(
      (college) => college.rating === rating
    );

    sendStatuswithData.success(res, colleges);
  } catch (error) {
    console.log(error);
    sendStatuswithData.serverError(res, "Something went wrong");
  }
};

const filterColleges = async (req, res) => {
  try {
    const { state, rating, courses } = req.query;
    console.log(state, rating, courses);

    // filter colleges based on state, rating and courses if any of them esists;

    const collegeData = await College.find({
      ...(state && { "location.state": state }),
      ...(rating && { rating: rating }),
      ...(courses && { courses: { $in: courses } }),
    }).lean();

    sendStatuswithData.success(res, collegeData);
  } catch (error) {
    console.log(error);
    sendStatuswithData.serverError(res, "Something went wrong");
  }
};

export { getAllColleges, getSingleCollege, getSimilarCollege, filterColleges };
