import React from "react"; 
import school from "../images/school.jpg"
class About extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <>
 <div className="row "  style={{height: "px"}} > 
            <h4>  Introduction Of School Management System <hr></hr></h4>
            <div className="">School management system is an information system to manage school related data and transactions. School system may consist of several branches within territory or round the globe. 
        It contains various actors for example students, staff, teachers, student’s parents, managerial staff etc.</div>
        <br></br>
        <div className="">A school management system is the best solution for managing daily school operations. It allows school to manage registration, admissions, academic calendar, attendance, and more.
        What is a School Management System? A school management system can be defined as a platform designed to enable the efficient running of your institution through digitization and automation of various academic and administrative operations.</div>
        <br></br>
        <div className="">A school management system is the best solution for managing daily school operations. It allows school to manage registration, admissions, academic calendar, attendance, and more.
        What is a School Management System? A school management system can be defined as a platform designed to enable the efficient running of your institution through digitization and automation of various academic and administrative operations.</div>
        <br></br>
        </div> 

               <div className="row">
        <div className="col-5 mt-3">
        <ul>
            <li>
            To reflect and conserver basic values.</li>
            <li>To carry out educational futures.</li>
            <li>To manage social change.</li>
            <li>To profit by experience.</li>
            <li>To carry out modernization.</li>
            <li>To propagate science.</li>
            <li>To adopt technology.</li>
            <li>To realize National Integration.
            </li>
            <li>To carry out educational futures.</li>
            <li>To realize National Integration.
            </li>
            <li>To carry out educational futures.</li>
        </ul>
        
        </div>
        <div className="col-7 mt-3">
        <img src={school} alt="Image logo"  width={600} height={250}/>

        </div>
        </div>
        </>      
        )
    }
}

export default About;