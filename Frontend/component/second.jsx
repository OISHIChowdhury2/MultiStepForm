import Input from "../pages/component/input";
import { useState } from "react";
import Joi from "joi-browser";
import formForAll from "../component/formForAll"

const SecondStep = ({ nextStep, prevStep, setRegistration, registration}) => {

   console.log(registration);

  
   const schema = {
    email: Joi.string().required().email({ minDomainAtoms: 2 }).label("Username"),                                      
    password: Joi.string().required().min(4).label("Password"),
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
    //const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, subSchema);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ target: input }) => {
    //const { name, value } = event.target;
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
    // setRegistation({ ...signUp, [input.name]: input.value });
    // setErrors({ ...errors, errors });
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
<div class="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
    <div class="bg-white py-6 px-10 sm:max-w-md w-full ">
        <div class="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
            Registration Form 
        </div>
  
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center justify-center shadow-md shadow-slate-300 w-[400px] h-[450px] border-t-4 border-sky-300"
      >
      
        <Input
          type="email"
          onChange={handleChange}
          value={registration.email}
          placeholder="enter your email"
          name="email"
          label="email"
        />

   <Input
          type="text"
          onChange={handleChange}
          value={registration.password}
          placeholder="enter your password"
          name="password"
          label="password"
        />
        <div className="space-x-4 mt-4">
          <button
            onClick={handlePrevStep}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            prev
          </button>
          <button
            onClick={secondNextStep}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            next
          </button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default SecondStep;