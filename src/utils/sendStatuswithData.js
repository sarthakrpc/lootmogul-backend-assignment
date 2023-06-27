const sendStatuswithData = {
  success: (res, data) => {
    res.status(200).send({
      error: false,
      code: 200,
      msg: "Success",
      data: data,
    });
  },
  created: (res, data) => {
    res.status(201).send({
      error: false,
      code: 201,
      msg: "Created",
      data: data,
    });
  },
  accepted: (res, data) => {
    res.status(202).send({
      error: false,
      code: 202,
      msg: "Accepted",
      data: data,
    });
  },
  noContent: (res, data) => {
    res.status(204).send({
      error: false,
      code: 204,
      msg: "No Content",
      data: data,
    });
  },
  serverError: (res, data) => {
    res.status(500).send({
      error: true,
      code: 500,
      msg: "Internal Server Error",
      data: data,
    });
  },
  badRequest: (res, data) => {
    res.status(400).send({
      error: true,
      code: 400,
      msg: "Bad Request",
      data: data,
    });
  },
  unauthorized: (res, data) => {
    res.status(401).send({
      error: true,
      code: 401,
      msg: "Unauthorized",
      data: data,
    });
  },
  forbidden: (res, data) => {
    res.status(403).send({
      error: true,
      code: 403,
      msg: "Forbidden",
      data: data,
    });
  },
  notFound: (res, data) => {
    res.status(404).send({
      error: true,
      code: 404,
      msg: "Not Found",
      data: data,
    });
  },
  methodNotAllowed: (res, data) => {
    res.status(405).send({
      error: true,
      code: 405,
      msg: "Method Not Allowed",
      data: data,
    });
  },
};

export default sendStatuswithData;
