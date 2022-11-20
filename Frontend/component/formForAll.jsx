import { useState } from "react";
import Joi from "joi-browser";

const useForm = (
  schema,
  formData,
  setFormData,
  errors,
  setErrors,
  doSubmit
) => {

  const validateLogin = () => {
    const { error } = Joi.validate(formData, schema, { abortEarly: false });
    if (!error) return null;

    const dataError = {};
    for (let item of error.details) dataError[item.path[0]] = item.message;

    return dataError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateLogin();
    setErrors({ ...errors, errors: errors || {} });
    if (errors) return;

    doSubmit();
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, subSchema);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ target: input }) => {
    let errorData = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) {
      errorData[input.name] = errorMessage;
    } else {
      delete errorData[input.name];
    }
    let Data = { ...formData };
    Data[input.name] = input.value;
    setFormData(Data);
    setErrors(errorData);
   
  };

  return { handleChange, handleSubmit };
};

export default useForm;