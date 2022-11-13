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
           className="justify-center border border-gray-200 rounded-md p-2 w-[300px]"
         />
         {error && <p className=" text-red-500 text-xs mt-2">{error}</p>}
       </div>
     );
   };
   
   export default Input;