const Input = ({ name, label, type, onChange, value, placeholder, error }) => {
     return (
       <div className="flex flex-col mt-4 p-2">
         <label className=" uppercase" htmlFor={name}>
           {label}
         </label>
         <input
           type={type}
           id={name}
           onChange={onChange}
           value={value}
           placeholder={placeholder}
           name={name}
           class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
         />
         {error && <p className=" text-red-500 text-xs mt-2">{error}</p>}
       </div>
     );
   };
   
   export default Input;