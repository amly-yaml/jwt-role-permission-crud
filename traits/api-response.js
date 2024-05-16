const success = (data, message) => {
  return {
    success: true,
    message: message,
    data: data,
  };
};

const error = (data, message) => {
  return {
    success: false,
    message: message,
    data: data,
  };
};

export { success, error };
