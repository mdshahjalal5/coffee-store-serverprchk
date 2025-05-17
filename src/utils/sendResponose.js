const sendResponose = (
  res,
  { success = true, message, data, statusCode = 200 },
) => {
  res.status(statusCode).json({
    success,
    message,
    data,
  });
};

export default sendResponose;
