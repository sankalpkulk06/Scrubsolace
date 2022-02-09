import React from 'react';
import { Link } from 'react-router-dom';
function Logout(){
    var divStyle = {
        marginLeft: "25%",
        marginTop: "16%"
    }
    var aStyle = {
        marginLeft: "170px",
        fontSize: "20px"
    }
    return(
        <div style={divStyle}>
            <h1>Thank You for visiting Scrubsolace!</h1>
            {/* <Link to ="http://localhost:5000/login">
                Click here to get redirected to Login Page
            </Link> */}
            <div style={aStyle}>Click here to redirect to <a href="http://localhost:5000/login" >Login</a> page</div>
        </div>
  
    )
}

export default Logout;
