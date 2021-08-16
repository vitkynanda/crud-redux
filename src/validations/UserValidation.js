const UserValidation = (values) => {
  const error = {};
  if (!values.name || values.name === "") {
    error.name = "name is required";
  }
  if (!values.address || values.address === "") {
    error.address = "address is required";
  }

  return error;
};

export default UserValidation;
