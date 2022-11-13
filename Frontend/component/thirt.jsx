import Input from "../pages/component/input";
import { useState } from "react";
import Joi from "joi-browser";
import axios from "axios";
import formForAll from "../component/formForAll"

//import all from  '../pages/userManagment/loginform'
const thirtStep = ({ nextStep, prevStep, setRegistration, registration }) => {
  console.log(registration);
  
   const schema = {                                     
    role: Joi.string().required().min(1).label("Role"),
  };

  // // validation data
  const signUp3 = {
    role: registration.role ,
  };

  // handle Error
  const [errors, setErrors] = useState({});

  const validateLogin = () => {
    const { error } = Joi.validate(signUp3, schema, { abortEarly: false });
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

  // const thirtNextStep = () => {
  //   const errors = validateLogin();
  //   setErrors({ ...errors, errors: errors || {} });
  //   if (errors) return;


  //   console.log("data is working");
   
  // };

  const handlePrevStep = () => {
    prevStep();
  };

  const register = async () =>{
    // const { firstName,lastName,email,password,role} = registration
    const formData = registration;
    delete formData.step;
    // if(firstName && email && password && role){
      try{
    axios.post("http://localhost:3030/api/v1/Register/reg", formData)
    .then( res=>
        // console.log("register done")
      {
        const notify = () => toast("Wow so easy!");
        return notify
      }
      );
    // }
    // else {
    //   console.log("register fail");
    // }
      }
      catch{

    console.log("hi");
      }
  }

 
  return (
<div class="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
    <div class="bg-white py-6 px-10 sm:max-w-md w-full ">
        <div class="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
            Registration Form 
        </div>
        <div class="">
            <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center justify-center shadow-md shadow-slate-300 w-[400px] h-[450px] border-t-4 border-sky-300"
      >
        <Input
          type="role"
           onChange={handleChange}
          value={registration.role}
          placeholder="enter your Role"
          name="role"
          label="role"
        />

        <div className="space-x-4 mt-4">
          <button
           
            className="w-[100px] bg-sky-300 text-white capitalize p-1 rounded-md hover:bg-sky-500"
          >
            log
          </button>

          <button  onClick={register} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default thirtStep;