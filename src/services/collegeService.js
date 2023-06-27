import College from "../models/College.js";
import Student from "../models/Student.js";

const getCollegeData = async (id) => {
  const college = await College.findById(id)
    .select("-createdAt -updatedAt -__v")
    .lean();

  const students = await Student.find({
    college: id,
  })
    .select("-college -createdAt -updatedAt -__v")
    .lean();

  const finalData = {
    college,
    studentsNum: students.length,
    students,
  };

  return finalData;
};

export { getCollegeData };
