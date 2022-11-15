import React,{useState,useEffect} from 'react'
import Link from 'next/link'


export default function showAll() {

  const [ showAlluser , setShowAll] = useState([])
  const apiUrl = 'http://127.0.0.1:3030/api/v1/Register/all'
  
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
    const allData = data.map((all)=>{
      console.log("all data",all);
      console.log("firstName",all.firstName);
        return(
            <p key={all.id}> {all.firstName} </p>
        )
      })
     console.log(allData);
      // console.log(responseData);
      // setShowAll(displayData);
   }
   useEffect(()=>{
     pulljson()
   },[])

//delete 

          const delectUser = async id =>{
    try {
      const delectUser = await fetch
      (`http://127.0.0.1:3030/api/v1/Register/${id}`,{
        method: "DELETE"
      });
    
       setUser(showAlluser.filter(user => user.id !== id));
      console.log(delectUser);
    }
    catch (err){
      console.log(err.massage);
    }
    window.location = "/userManagment/showAll"
  }

  return (
    <div>
       <section class="bg-gray-50 dark:bg-gray-500">
       <a href="/userManagment/loginform" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">LogOut</a>
       <div class="w-full  bg-white rounded-lg shadow dark:border md:mt-100 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full p-6 space-y-4 md:space-y-6 sm:p-8">
      { showAlluser.map(all=>(
        <form class="space-y-4 md:space-y-6 ">
 <div class="min-h-fit bg-gray-100 inline-flex justify-center items-center shadow-lg shadow-red-500 md:shadow-xl md:shadow-red-500"> 
  <div class="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-99 transition-all ">
    {/* <img class="w-64 object-cover rounded-t-md" src="https://images.unsplash.com/photo-1509223197845-458d87318791" alt="" /> */}
    <div class="mt-4">
      <h1 class="text-2xl font-bold text-gray-700">User Information</h1>
       <div className=' text-gray-700'>
          First Name: {all.firstName}
          </div>
          <div className=' text-gray-700'>
          Last Name : {all.lastName}
          </div>
          <div className=' text-gray-700'>
          Email : {all.email}
          </div>
          <div className=' text-gray-700'>
          Role :{all.role}
          <div>
          </div>
       </div>
      <div class="mt-4 mb-2 flex justify-between pl-4 pr-2">
      <Link href='/userManagment/update'><a>
      <button type="button" class="px-6 btn
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
   Update
   </button></a></Link>
       <button class="text-md block font-semibold py-2 px-4 text-green-100 hover:text-white bg-gray-400 rounded-lg shadow hover:shadow-md transition duration-300" onClick={()=>delectUser(all.id)}>Delete</button>
      </div>
    </div>
  </div>
 
</div>
</form>
  )
      )}
     
  <div></div>
       <div class="shadow-lg shadow-black-100/1  md:shadow-xl shadow-cyan-500/50">
       {/* <button class="bg-indigo-500 shadow-lg absolute inset-y-4 right-0 w-26 h-16 shadow-indigo-500/50"><Link href="/about/viewcontact"><a > View All User FeedBack</a></Link></button> */}
       </div>
      </div>
      <a href="/about/viewcontact" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">View All Feedback</a>
      </div>
      </section>

      </div>
  )
  
}

