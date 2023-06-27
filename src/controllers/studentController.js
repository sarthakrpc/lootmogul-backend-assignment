import sendStatuswithData from "../utils/sendStatuswithData.js";
import Student from "../models/Student.js";

const getStudent = async (req, res) => {
  try {
    const id = req.params.id;

    const finalData = await Student.findById(id)
      .populate([
        {
          path: "college",
          select: "_id name location year rating courses",
        },
      ])
      .select("-__v -createdAt  -updatedAt")
      .lean();

    sendStatuswithData.success(res, finalData);
  } catch (error) {
    console.log(error);
    sendStatuswithData.serverError(res, "Something went wrong");
  }
};

export { getStudent };
