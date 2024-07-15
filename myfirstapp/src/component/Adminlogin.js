import React from "react"; 
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class Adminlogin extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
          <>
          <div class="form-popup" id="myForm">
  <form action="" class="form-container">
    <h1>Login</h1>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit" class="btn">Login</button>
    <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
    
  </form>

</div>

          


          </>


        )
    }
}

    export default Adminlogin;