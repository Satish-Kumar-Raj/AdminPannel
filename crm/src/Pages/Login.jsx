import React from "react";
import lms from "../Image/five.jpeg"
import hlogo from "../Image/one.jpg"

function Login(){
    return(
        <div className="formCantainer">
        <img src={lms} className="lmsimg" /> 


        <div className="formWrapper">
        <form>
        <img src={hlogo} className="logoimg" />
        <span className="title">
            Login to Your dashboard
        </span>
        <label>
            Email
        </label>
        <input placeholder="Enter Your username" />
        <label>
            Password
        </label>
        <input placeholder="Enter Password" />

        <button>
            Login
        </button>

       </form>





            
        </div>
      
        </div>
      
    );
   
}
export default Login;