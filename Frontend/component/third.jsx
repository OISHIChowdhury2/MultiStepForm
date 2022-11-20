import Input from "../pages/component/input";
import { useState } from "react";
import Joi from "joi-browser";
import axios from "axios";
import formForAll from "./formForAll";

const thirtStep = ({nextStep, prevStep, setRegistration, registration }) => {
  console.log(registration);
  
   const schema = {                                     
    role: Joi.string().required().min(1).label("Role"),
  };

  const signUp3 = {
    role: registration.role,
  };

  const [errors, setErrors] = useState({});
  const validateLogin = () => {
    const { error } = Joi.validate(signUp3, schema, { abortEarly: false });
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
  };

  const handlePrevStep = () => {
    prevStep();
  };

  const register = async () =>{
    const formData = registration;
    delete formData.step;
    const {email} = formData;
  if(email){
    axios.post("http://localhost:3030/api/v1/Register/reg", formData)
    .then( res=>
        window.location.href = '../userManagment/loginform');   
    }
    else{
        alert("reg fail");
    }
  }
  return (
<div>
<section class="bg-gray-50 dark:bg-gray-500">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign up to your account
              </h1>
              <form  class=" space-y-4 md:space-y-6 text-gray-50" 
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
       <Input
          type="role"
          onChange={handleChange}
          value={registration.role}
          placeholder="enter your Role"
          name="role"
          label="role"
          error={errors.role}
       />
        <div className="space-x-4 mt-4">
          <button
          onClick={handlePrevStep}
          className="bg-gray-300 hover:bg-gray-400 text-white-500 font-bold py-2 px-4 rounded-r"
          >
            Prev
          </button>
          <button
          onClick={register}
          className="bg-gray-300 hover:bg-gray-400 text-white-800 font-bold py-2 px-4 rounded-r">
            Submit
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

export default thirtStep;