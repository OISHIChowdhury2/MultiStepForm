import React,{useState,useEffect} from 'react'
import Link from 'next/link'


export default function viewContact() {

  const [ showAlluser , setShowAll] = useState([])
  const apiUrl = 'http://127.0.0.1:3030/api/v1/contact/all'
  
  const pulljson = async() =>{
    // try {
    //   const response = await fetch(apiUrl);
    //   const Data = await response.json()
    //   setShowAll(Data);
    // }
    // catch(err)
    // {
    //   console.log(err.massage);
    // }
    const response = await fetch(apiUrl)
    const {data} = await response.json()
     setShowAll(data);
    console.log("my data",data)
    const viewData = data.map((view)=>{
      console.log("all data",view);
        return(
            <p key={view.id}> {view.name} </p>
        )
      })
     console.log(viewData);
      // console.log(responseData);
      // setShowAll(displayData);
   }
   useEffect(()=>{
     pulljson()
   },[])

   return (
     <div>
       { showAlluser.map(view=>(
      
<div class=" relative w-96 min-h-fit bg-gray-100 inline-flex justify-center items-center shadow-lg shadow-red-500 md:shadow-xl md:shadow-red-500">
  <div class="  w-96 p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-99 transition-all transform duration-500">
    {/* <img class="w-64 object-cover rounded-t-md" src="https://images.unsplash.com/photo-1509223197845-458d87318791" alt="" /> */}
    <div class="mt-4">
      <h1 class="text-2xl font-bold text-gray-700">User Information</h1>
       <div className=' text-gray-700'>
           {view.name}
          </div>
          <div className=' text-gray-700'>
          {view.email}
          </div>
          <div className=' text-gray-700 '>
          {view.msg}
         
          </div>
     
    </div>
  </div>
 
</div>

)
)}
</div>

)

}

