import React from "react";
import ConImage from "../images/contact.jpg";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <>
      <div className="row"   style={{height: "px"}}>
        <h3>Contact Us Form</h3>
        </div> 
         <div className="row">
          <div className="col-5">
            <form>
            <div className="mb-3 mt-3">
            <label for="Name"><b>Name</b></label>
            <input type="Name" class="form-control" id="SMSName_Id" name="SMSC_Name" placeholder="Enter Name" ></input>
            </div>
            <div className="mb-3 mt-3">
            <label for="Email"><b>Email</b></label>
            <input type="Email" class="form-control" id="SMSEmail_Id" name="SMSEmail_Name" placeholder="Enter Email" ></input>
            </div>
            <div className="mb-3 mt-3">
            <label for="Phone"><b>Phone</b></label>
            <input type="Phone" class="form-control" id="SMSPhone_Id" name="SMSPhone_Name" placeholder="Enter Phone Number" ></input>
            </div>
            <div className="mb-3 mt-3">
            <label for="Subject"><b>Subject</b></label>
            <input type="Subject" class="form-control" id="SMSSubject_Id" name="SMSSubject_Name" placeholder="Enter Subject" ></input>
            </div>
            <div  classNameName="mb-3 mt-3">
            <label for="Message"><b>Message</b></label>
            <textarea className="Message" class="form-control" id="SMSMessage_Id" name="SMSMessage_Name" placeholder="Enter Message" ></textarea>
            </div>
             <div className="row">
              <div className="col mt-3 d-flex justify-content-center">
              <button type="submit " class="btn btn-success " >Submit Details</button>
              </div>
              <div className="col mt-3 d-flex justify-content-center">
              <button type="submit" class="btn btn-success">Reset Form</button> 
              </div>
             </div>
           
            
            </form>
            </div>
          <div className="col-7">
          <img src={ConImage } alt="contact us" width={700} height={400} ></img>
            
          </div>

          </div>
       
 
        </>
    );
  }
}

export default Contact;
