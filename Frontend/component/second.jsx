import Input from "../pages/component/input";
import { useState } from "react";
import Joi from "joi-browser";
import formForAll from "../component/formForAll"
import { match } from "assert";

const SecondStep = ({ nextStep, prevStep, setRegistration, registration}) => {

   const schema = {
    email: Joi.string().required().email().label("Email"),                                      
    password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'give a strong password').required().min(4).label("Password"),
  };
  // // validation data
  const signUp2 = {
    email: registration.email ,
    password: registration.password,
  };
  // handle Error
  const [errors, setErrors] = useState({});

  const validateLogin = () => {
    const { error } = Joi.validate(signUp2, schema, { abortEarly: false });
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

  const secondNextStep = () => {
    const errors = validateLogin();
    setErrors({ ...errors, errors: errors || {} });
    if (errors) return;
    console.log("data is working");
    nextStep();
  };

  const handlePrevStep = () => {
    prevStep();
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
          type="email"
          onChange={handleChange}
          value={registration.email}
          placeholder="enter your email"
          name="email"
          label="email"
          error={errors.email}
      />
      <Input
          type="password"
          onChange={handleChange}
          value={registration.password}
          placeholder="enter your password"
          name="password"
          label="password"
          error={errors.password}
      />
        <div className="space-x-4 mt-4">
          <button
            onClick={handlePrevStep}
            className="bg-gray-300 hover:bg-gray-400 text-white-500 font-bold py-2 px-4 rounded-r"
          >
            Prev
          </button>
          <button
            onClick={secondNextStep}
            className="bg-gray-300 hover:bg-gray-400 text-white-800 font-bold py-2 px-4 rounded-r">
            Next
          </button> 
       </div> 
      </div>     
     </form>
    </div>
   </div>
  </div>
 </section>
</div>
  );
};

export default SecondStep;