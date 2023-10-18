import React from 'react'
function LoginForm()
 {
  return (
    <div className='wrapper d-flex bg-dark align-items-center justify-content-center w-100'>
        <div className='login rounded'>
            <form className='needs-validation'>
            <center><h2 className='mb-3 text-danger' >Login Form</h2></center>
            <div className='form-group was-validated mb-2'>

                <label htmlFor='email' className='form-label'>Email</label>
                <input type='email'  className='form-control' required/>
                <div className="invalid-feedback">
                    Please Enter Your Email
                </div>

            </div>
            <div className='form-group was-validated mb-2'>

                <label htmlFor='password' className='form-label'>Password</label>
                <input type='password' className='form-control' required/>

                <div className="invalid-feedback">
                    Please Enter Your Password
                </div>

            </div>
            <div className='form-group form-check mb-2'>

               
                <input type='checkbox' className='form-check-input'></input> 
                <label htmlFor='check' className='form-check-label'>Remember me</label>

            </div>   
    
        <br></br>
        <button type="submit" className='btn btn-primary w-100 mt-2'>Sign In</button>

        </form>
        </div>
    </div>
  )
}

export default LoginForm