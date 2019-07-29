export const createHandleChange = (values, setValues) => name => ({
  target: { value },
}) => {
  setValues({
    ...values,
    [name]: value,
  });
};

export default createHandleChange;
