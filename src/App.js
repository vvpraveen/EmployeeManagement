


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/files-js/Login';
import { Signup } from './components/files-js/Signup';
import { Navibar } from './components/files-js/Navibar';
import { Aboutus } from './components/files-js/Aboutus';
import { Projects } from './components/files-js/Projects';
import Cal from './components/files-js/Cal';
import EmpListing from './components/files-js/EmpListing';
import EmpCreate from './components/files-js/EmpCreate';
import EmpDetail from './components/files-js/EmpDetails';
import EmpEdit from './components/files-js/EmpEdit';



export default function App() 
{
  return (
    <div className="App">
   <BrowserRouter>
     <Routes>
      <Route path='' element={ <Login/>}/>
      <Route  path='signup' element={<Signup/>}  />         
          <Route path="navi" element={<Navibar/>}/>
          <Route path="aboutus" element={<Aboutus/>}/>
          <Route path="projects" element={<Projects/>}/>
           <Route path="/cal" element={<Cal/>}/>
           <Route path="employeedetails" element={<EmpListing/>}/>
           <Route path="employeecreate" element={<EmpCreate/>}/>
           <Route path="employee/display/:empid" element={<EmpDetail/>}/>
           <Route path="employee/edit/:empid" element={<EmpEdit/>}/>
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

