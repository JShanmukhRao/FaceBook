import React from "react"
import {Link} from 'react-router-dom'
const Signup = ()=>{
    return(
 <div className="mycard">
           <div className="card auth-card input-field ">
               <h2>MyFacebook</h2>
               <input   
                 type="text"
                 placeholder="Name"

               /> 
               <input   
                 type="email"
                 placeholder="Email"

               /> 
                <input   
                 type="password"
                 placeholder="Password"

               /> 
               <input   
                 type="password"
                 placeholder="Confirm Password"

               /> 

                 <button className="btn waves-effect waves-light blue lighten-2" type="submit"  >Signup
                 </button>
                 <br></br>
                 <Link to="/signin">Already have a account</Link>

            </div>
      </div>    )
}
export default Signup;