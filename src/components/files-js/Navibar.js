

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import { Link, useNavigate } from "react-router-dom";
export const Navibar = () => {
    const navigation=useNavigate();
  return (
    <div className="container-fluid">
    <div className="backgrnd  100-vw" >
    <div className="container-fluid">
      <div className="row">

        <div className="col-4 col-sm-2 bg-dark d-flex flex-column justify-content-between  min-vh-100 ">
          <div className="mt-2">
            <a className="text-decoration-node  d-flex align-items-center text-white d-none d-sm-inline">
              <span className="fs-4"> DashBoard</span>
            </a>

            <hr className=" text-white d-none d-sm-block"></hr>
            <ul class="nav nav-pills flex-column  " id="parentM">
              <li class="nav-item my-1">
                <a href="#" class="nav-link  text-white" aria-current="page">
                  <i className="bi bi-speedometer2"> </i>
                  <span className="ms-2"> DashBoard</span>
                </a>
              </li>
              <li class="nav-item   my-1">
                <a
                  href="#submenu"
                  class="nav-link  text-white"
                  data-bs-toggle=" collapse"
                  aria-current="page"
                >
                  <i className="bi bi-grid"> </i>
                  <span className="ms-2"> Details</span>
                  <i className="bi bi-arrow-down-short ms-3"></i>
                </a>

                <ul
                  class="nav  collapse ms-2 flex-column"
                  id="submenu"
                  data-bs-parent="#parentM"
                >
                  <li class="nav-item  text-white">
                    <a class="nav-link " href="#" aria-current="page">
                      item1
                    </a>
                  </li>
                  <li class="nav-item text-white">
                    <a class="nav-link" href="#">
                      item2
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item  my-1">
                <a href="" class="nav-link  text-white" aria-current="page">
                  <i className="bi bi-calender"> </i>
                  <Link to="/Cal"><span className="ms-2 comman">Calender</span></Link>
                </a>
              </li>
              <li class="nav-item  my-1">
                <a href="#" class="nav-link  text-white" aria-current="page">
                  <i className="bi bi-employeedetail"> </i>
              <Link to="/employeedetails"> <span className="ms-2  comman"  > EmployeeDetails</span></Link>
                </a>
              </li>
              <li class="nav-item  my-1">
                <a href="#" class="nav-link    text-white" aria-current="page">
                  <i className="bi bi-status"> </i>
                  <Link to="/Projects"> <span className="ms-2 comman" onClick={()=> navigation('projects')}> projects</span></Link>
                </a>
              </li>
              <li class="nav-item  my-1">
                <a href="#" class="nav-link  text-white" aria-current="page">
                  <i className="bi bi-employeejob"> </i>
                  <Link to="/aboutus"><span className="ms-2 comman " > About Us</span></Link>
                </a>
              </li>
              <li class="nav-item  my-1">
                <a href="#" class="nav-link  text-white" aria-current="page">
                  <i className="bi bi-employeejob"> </i>
                  <Link to="/"><span className="ms-2 comman " > Log Out</span></Link>
                </a>
              </li>
            </ul>
          </div>            
          <div class="dropdown open">
            <a
              class="btn border-none dropdown-toggle text-white"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bi bi-person fS-4"></i>
              <span className="fs-5 ms-3">YourSelf</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="triggerId">
              <a class="dropdown-item" href="D:\140-ReactProject\project\src\components\Loginfolder\Login.js">
                Profile
              </a>
              <a class="dropdown-item " href="#">
                Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};



