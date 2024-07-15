import React from "react";
import BGImage from "../images/bg1.jpg";
import feeImage from "../images/fee.jpg";
import stdImage from "../images/sch.jpg";
import lastImage from "../images/las.jpg";
import adminlogin from "../images/adminlogin.jpg";
import studentlogin from"../images/studentlogin.jpg";
import student from"../images/student.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {NavLink,Outlet,Link} from "react-router-dom";

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return( 
        <div>
        <div className="row "  style={{height: "300px"}} >
      <div className=" "   style={{
         backgroundImage: `url(${BGImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    > 
    </div>
    </div>
    <div className="row mt-3">
        <div className="col-3">
         <h5>Attendance Management</h5>
         <hr></hr>
       <div className="text-center" >
       <img src={feeImage} alt="Image logo" width={250} height={200} />
       <h5>Fees Management</h5></div>
       <div className="mt-3 text-center" >
       <img src={stdImage} alt="Image logo" width={250} height={200} />
       <h5>Student Management</h5></div>
       <div className="mt-3" >
       <img src={lastImage} alt="Image logo" width={250} height={200} />
      </div>
  

         
        </div>
        <div className="col-6">
        <h5>School Management System</h5>
        <hr></hr>
        <div className="">School management system is an information system to manage school related data and transactions. School system may consist of several branches within territory or round the globe. 
        It contains various actors for example students, staff, teachers, student’s parents, managerial staff etc.</div>
        <br></br>
        <div className="">A school management system is the best solution for managing daily school operations. It allows school to manage registration, admissions, academic calendar, attendance, and more.
        What is a School Management System? A school management system can be defined as a platform designed to enable the efficient running of your institution through digitization and automation of various academic and administrative operations.</div>
        <br></br>
        <div className="">A school management system is the best solution for managing daily school operations. It allows school to manage registration, admissions, academic calendar, attendance, and more.
        What is a School Management System? A school management system can be defined as a platform designed to enable the efficient running of your institution through digitization and automation of various academic and administrative operations.</div>
        <br></br>
        <div className="">A school management system is the best solution for managing daily school operations. It allows school to manage registration, admissions, academic calendar, attendance, and more.
        What is a School Management System? A school management system can be defined as a platform designed to enable the efficient running of your institution through digitization and automation of various academic and administrative operations.
        Such concepts include: management, educational management, planning, organising, staffing, directing, controlling, coordinating, evaluating, and budgeting as they all apply to the school system.</div>
        </div>
        
          <div className="col-3">
          <h5>Login System</h5>
           <hr></hr>
           <div className="card bg-secondary ">
           <Link to="/Adminlogin">
           <img src={adminlogin} alt="admin"  width={100} height={100} onclick="document.getElementById('modal01').style.display='block'"/><small className="text-dark " ><b>ADMIN LOGIN </b></small></Link>
          
           </div>
           <div className="card mt-4 bg-secondary">
           <Link to="/Studentreg">
           <img src={studentlogin} alt="student" width={100} height={100} /><small className="text-dark "><b>STUDENT LOGIN </b></small></Link>
            
           </div>
           <img src={student} alt="student" width={265} height={400} />
          </div>

    </div>
    
    </div>
                
        )
    }
}

export default Home;