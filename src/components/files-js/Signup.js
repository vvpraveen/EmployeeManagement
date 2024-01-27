import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/Login.css';
export const Signup = () => {
  const navigate=useNavigate()
  return (
    <div>
        <sect className='mainbox12'>
        <section className='backgrnd1'>
       <form className="mainbox" action="#" required>
    <div className="head">
        <div className="text-font con">Sign Up</div>
        <div className="under"></div>
       </div>
        <div className="inputs">
        <div className="input">
            <label className="input-submit" >Employee Name:</label>
            <input type="text" placeholder="Enter your name" className="input-submit"  required></input>
        </div>
        <div className="input">
            <label className="input-submit" >Address:</label>
           <textarea className='input-submit'   required></textarea>
        </div>
        <div className="input">
            <label className="input-submit" >Date Of Birth:</label>
            <input type="date"  className="input-submit"  required></input>
        </div>
        <div className="input">
            <label className="input-submit" >Email:</label>
            <input type="email" placeholder="Mail" className="input-submit"  required></input>
        </div>
        <div className="input">
            <label className="input-submit" >Mobile:</label>
            <input type="text" placeholder="Mobile number" className="input-submit"  required></input>
        </div>
        <div className="input">
            <label className="input-submit" >Year Of Graduation:</label>
            <input type="text" placeholder="Graduation Year" className="input-submit"  required></input>
        </div>
        <div className="input">
            <label className="input-submit" >Blood Group:</label>
           <select className='blood hidden' required >
           <option value=""disabled selected hidden  required   > Select Blood Group</option>
            <option>O +ve</option>
            <option>A +ve</option>
            <option>B +ve</option>
            <option>AB +ve</option>
            <option>O -ve</option>
            <option>AB -ve</option>
           </select>
        </div>
        <div className="input">
            <label className="input-submit"> Create Username:</label>
            <input type="text" placeholder="Username" className="input-submit"  required></input>
        </div>
        <div className="input">
            <label className="input-submit" >Password:</label>
            <input type="password" placeholder="Enter your password" className="input-submit"  required></input>
        </div>
        <div className="input">
            <label className="input-submit" > Re-Enter Password:</label>
            <input type="password" placeholder="password" className="input-submit"  required></input>
        </div>
    </div>
   
    <div className="submit-container">
        <p className="submit" onClick={()=>navigate('/')}>Submit</p>
    </div>
</form>
</section>
</sect>
    </div>
  
  )
}
