import randBetween from "../utils/getRandomYear.js";
import College from "../models/College.js";
import Student from "../models/Student.js";
import connectDB from "../config/dbConn.js";
import randomString from "../utils/randomString.js";

const createData = async () => {
  const courses = [
    "Computer Science",
    "Electronics",
    "Mechanical",
    "IT",
    "Civil",
  ];

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  await connectDB();

  const college = [];
  const student = [];

  for (let i = 0; i < 100; i++) {
    const name = `College${i + 1}`;
    const year = randBetween(1900, 2022);

    const country = "India";
    const city = "abc";
    const state = states[randBetween(0, 27)];

    const location = {
      country,
      city,
      state,
    };

    const rating = randBetween(1, 5);

    let course = [];
    Array.from({ length: 5 }).forEach((element) => {
      course.push(courses[randBetween(0, 4)]);
    });

    const uniqueCourse = [...new Set(course)];

    const collegeData = {
      name,
      year,
      location,
      rating,
      courses: uniqueCourse,
    };

    // college.push(collegeData);

    console.log(`inserting college row ${i}`);
    const data = new College(collegeData);
    await data.save();

    const collegeId = data._id;
    // console.log(collegeId);
    const studentLength = randBetween(100, 200);

    let studentDataArr = [];
    for (let j = 0; j < studentLength; j++) {
      const stName = `Student${j + 1}${randomString(8)}`;
      const stYear = randBetween(year, 2023);
      const stCourse = uniqueCourse[randBetween(0, uniqueCourse.length - 1)];
      const stcollege = collegeId;

      const studentData = {
        name: stName,
        year: stYear,
        course: stCourse,
        college: stcollege,
      };
      studentDataArr.push(studentData);
    }

    console.log(`inserting students`);

    // console.log(studentDataArr);

    await Student.insertMany(studentDataArr);
  }

  console.log("finished");
  //   const data = await College.insertMany(college);
};

createData();
