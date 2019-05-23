const error = (status, message, errorObj) => {
  return {
    status: status,
    message: message,
    error: errorObj,
  };
};

export default error;
