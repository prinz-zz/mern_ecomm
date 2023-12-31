//Not found

const notFound = (req, res, next) => {
  const error = new Error(`Not found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

//Error handler
const errorHandler = (err, req, res, next) => {
  const statuCode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(statuCode).json({
    message: err?.message,
    stack: err?.stack,
  });
};

export { notFound, errorHandler };
