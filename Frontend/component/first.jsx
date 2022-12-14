import Joi from "joi-browser";
import { useState } from "react";
import formForAll from "../component/formForAll"
import Input from "../pages/component/input";

const FirstStep = ({ nextStep, setRegistration, registration }) => {
  
  const schema = {
    firstName: Joi.string().min(4).max(20).required().label("FirstName"),
    lastName: Joi.string().min(4).max(20).required().label("LastName"),
  };

  const signUp = {
    firstName: registration.firstName,
    lastName: registration.lastName,
  };

  const [errors, setErrors] = useState({});
  const validateLogin = () => {
    const { error } = Joi.validate(signUp, schema, { abortEarly: false });
    if (!error) return null;
    const dataError = {};
    for (let item of error.details) dataError[item.path[0]] = item.message;
    return dataError;
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
    let Data = { ...registration };
    Data[input.name] = input.value;
    setRegistration(Data);
    setErrors(errorData);
 
  };

  const handleNext = (e) => {
    const errors = validateLogin();
    setErrors({ ...errors, errors: errors || {} });
    if (errors) return;
    console.log("data is working");
    nextStep();

  };
  return (
     <div>
<section class="bg-gray-50 dark:bg-gray-500">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
       <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Sign up to your account
          </h1>
   <form class=" space-y-4 md:space-y-6 text-gray-50" action="#">
      <div>
       <Input
          type="text"
          onChange={handleChange}
          value={registration.firstName}
          placeholder="enter your First"
          name="firstName"
          label="firstName"
          error={errors.firstName}
        />
        </div>       
          <div>
       <Input
          type="text"
          onChange={handleChange}
          value={registration.lastName}
          placeholder="enter your Lastname"
          name="lastName"
          label="Lastname"
          error={errors.lastName}
        />
          </div>
           <div class="flex items-center justify-between">
           <div class="flex items-start">
         </div>
        </div>
       <button onClick={handleNext}  type="submit" class="w-full text-white-50 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next</button>
     </form>
    </div>
   </div>
  </div>
 </section>
</div>
  );
};

export default FirstStep;



