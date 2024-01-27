import React from 'react' ;
import '../assets/Login.css'
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  const navigate = useNavigate();
  return (

    <section className='backgrnd1'>
    <form className="mainbox">
    <div className="head">
        <div className="text-font">Login</div>
        <div className="under"></div>
    </div>
    <div className="inputs">
        <div className="input">
            <label className="input-submit">Employee Id:</label>
            <input type="text" placeholder="Enter your username" className="input-submit"></input>
        </div>
        <div className="input">
            <label className="input-submit">Password:</label>
            <input type="password" placeholder="Enter your password" className="input-submit"></input>
        </div>
    </div>
    <div className="forgot"> <span> New Users Can <button  className=" buttonSignup" onClick={()=>navigate('signup')} >Sign Up</button></span></div>
    <div className="submit-container">
        <p className="submit" onClick={()=>navigate('navi')}>Login</p>
    </div>
</form>
</section>
    

  )
}  
