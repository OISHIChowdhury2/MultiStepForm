import React,{Fragment,useState} from 'react'

export const update = ({all}) => {

  console.log(all);
  const [firstName, setFirstName]= useState(all.firstName);
  const [lastName, setLastName]= useState(all.lastName);
  const [email, setEmail]= useState(all.email);
  const [role, setRole]= useState(all.role);
      
const updateUser = async e => {
        try{
          const body = {firstName,lastName,email,role};
          const response = await fetch(`http://127.0.0.1:3030/api/v1/Register/${all.id}`,{
              method : "PUT",
              headers : {"Content-Type" : "application/json"},
              body : JSON.stringify(body)
          })
          console.log(body);
          window.location = "/Home";
      }
      catch{
          res.send(401);
      }         
}
  return (
    <Fragment>

<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
   
    <h5 class="modal-title" id="exampleModalLabel">Edit Information</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div>
        <label className="form-label" >First name</label>
            <input type="text" className="form-control" name="firstame" value={firstName} onChange={e=> setFirstName(e.target.value)}/>
        </div>
        <div>
            <label className="form-label" >Last name</label>
            <input type="text" className="form-control" name="lastName" value={lastName}onChange={e=> setLastName(e.target.value)} />
            </div>
            <div>
        <label className="form-label">Email</label>
        <input type="email"  className="form-control" name="email" value={email} onChange={e=> setEmail(e.target.value)}/>
        </div>
        <div>
    <label className="form-label" >Role</label>
    <input type="text"  className="form-control" name="role" value={role} onChange={e=> setRole(e.target.value)}/>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button"
         class="btn btn-primary" 
         onClick = { e => updateUser(e)}
         data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </Fragment>

//     <div class="modal-action">
//       <label for="my-modal-6" class="btn">Yay!</label>
//     </div>
//   </div>
// </div>
//     </div>
  )
}

export default update;