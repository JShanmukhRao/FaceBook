import React from "react"
import { Link } from "react-router-dom"

const Signin = ()=>{
    return(
      <div className="mycard">
           <div className="card auth-card input-field ">
               <h2>MyFacebook</h2>
               <input   
                 type="email"
                 placeholder="Email"

               /> 
                <input   
                 type="password"
                 placeholder="Password"

               /> 

                 <button className="btn waves-effect waves-light blue lighten-2" type="submit"  >Login
                 </button>
                 <br/>
                 <Link to="/signup">Dont't have a account</Link>
            </div>
      </div>
         
 )
}
export default Signin;