import React from "react"; 

import ImgLogo from "../images/img1.png";

const Logo = () =>{
    return(
        <>
        <div className="container "  >
        <img src={ImgLogo} alt="Image logo" width={100} height={100} />
              &nbsp;<b>School Management System</b></div>
              </>
    )
}
export default Logo;