import { randomBytes } from "crypto";

const randomString = (x) => {
  // Generate a random x digit string
  const string = randomBytes(x).toString("hex");

  return string.substring(0, x);
};

export default randomString;
