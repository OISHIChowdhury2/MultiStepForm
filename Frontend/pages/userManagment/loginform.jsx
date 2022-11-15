import React,{useState} from 'react'
import Link from 'next/link'
import axios from "axios";
import Joi from "joi-browser";
import { useRouter } from 'next/router';

export const loginform = () => {

     // const navigation =useNavigate();
     const router = useRouter();
     const[user, setUser]= useState({
       email:"",
       password: ""
     })

     const [errors, setErrors] = useState({});
     const schema = {
       email: Joi.string().required().email({ minDomainAtoms: 2 }).label("Username"),
       password: Joi.string().required().min(4).label("Password"),
     };
   
     const validateForm = (e) => {
          e.preventDefault();
          const result = Joi.validate(user,
            schema, { abortEarly: false });
          console.log(result);
          const { error } = result;
          if (!error) {
            return null;
          } else {
            const errorData = {};
            for (let item of error.details) {
              const name = item.path[0];
              const message = item.message;
              error[name] = message;
            }
            console.log(errors);
            setErrors(errorData);
            return errorData;
          }
        };
      
        const handeleChange = e => {
          // console.log(e.target);
          const { name, value } = e.target;
      
          // setUser({ 
          //   ...user,
          //   [name]: value
          //   })
          console.log(name, value);
          let errorData = { ...errors };
          const errorMessage = validateProperty(e);
          if (errorMessage) {
            errorData[name] = errorMessage;
          } else {
            delete errorData[name];
          }
          let customerData = { ...user };
          customerData[name] = value;
          setUser(customerData);
          setErrors(errorData);
          console.log(name, value);
        }

        const loginInTo = async (e) =>{
          e.preventDefault();
          const {email,password} = user
          if( email && password ){
          axios.post("http://127.0.0.1:3030/api/v1/Register/login", user)
          .then(res => 
               router.push('/userManagment/showAll')
         
          )
          }
          else {
            console.log("login Fail");
            alert("Hello\nlogin Fail?");
          }
          
        }
      
        const validateProperty = (e) => {
          const { name, value } = e.target;
          const obj = { [name]: value };
          const subSchema = { [name]: schema[name] };
          const result = Joi.validate(obj, subSchema);
          const { error } = result;
          return error ? error.details[0].message : null;
        };
        const clearState = () => {
          setUser({
            email: "",
            password: "",
          });
        

     }
       
  return (
    <div>
     
     <section class="bg-gray-50 dark:bg-gray-500">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-50 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class=" space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-50 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" value={user.email} onChange={handeleChange}/>
                      {errors.email && (
                          <div className=" text-red-600 italic text-sm alert alert-danger alert-dismissible d-flex align-items-center fade show">
                            {/* <FontAwesomeIcon icon="fa-solid fa-check" /> */}
                            {errors.email}
          </div>
               )}
                  
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.password} onChange={handeleChange}/>
                      {errors.password && (
                          <div className=" text-red-600 italic text-sm alert alert-danger alert-dismissible d-flex align-items-center fade show">
                            {/* <FontAwesomeIcon icon="fa-solid fa-check" /> */}
                            {errors.password}
          </div>
               )}
                  
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button onClick={loginInTo} type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a  href="/userManagment/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</div> 


  )
}
export default loginform