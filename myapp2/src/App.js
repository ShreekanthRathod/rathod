import { useState } from "react";
function App()
{
  const[userRegistration,setUserRegistration]=useState(
    {
      username:"",
      password:"",
      Date:"",
      category:""
  }
  )
  const handleClick=(e)=>
  {
    const name=e.target.name;
    const value=e.target.value;
    
    setUserRegistration({...userRegistration,[name]:value});
  }
   const handlesubmit=(e)=>
  {
    e.preventDefault();
    setUserRegistration({username:"",password:"",date:"",category:""});
  }
  return(
    <div class="container mt-4">
      <form onSubmit={handleClick}>
      <div className="row w-50">
      <h1 className="text-center"><u>React form</u></h1>
      <label className="my-4">userName</label>
      <input type="userName" name="userName" autoComplete="off" className="form-control"
      value={userRegistration.username} onChange={handleClick}/>
      <label className="my-4">password</label>
      <input type="password" name="password" autoComplete="off" className="form-control" value={userRegistration.password} 
      onChange={handleClick}/>
    
      <label className="my-4s">Date</label>
      <input type="Date" name="Date" autoComplete="off" className="form-control" value={userRegistration.Date} onChange={handleClick}/>
      <label htmlFor="categorys" className="my-4">category</label>
      
      <select name="category" className="form-control" value={userRegistration.category} onChange={handleClick}>
        <option value="Entertainment">Entertainment</option>
        <option value="Drama">Drama</option>
        <option value="Action">Action</option>
        <option valu="Games">Games</option>
      

      </select>
      <button className="btn btn-primary my-4 w-100">Submit</button>
      </div>
      </form>

      
      
      

    </div>
  )
}
export default App;