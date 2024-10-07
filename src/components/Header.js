import React, { useState } from "react";
import ReactDOM from 'react-dom/client'
const Header = ()=>{
    const[logIn,setLogIn] = useState(false)
    return(
        <div className="header">
            <div className="loogo-container">
                <a href="#">
                    <img src="" alt="" />
                </a>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{setLogIn(!logIn)}}>{logIn ? "logout" : "login"}</button>
                </ul>
            </div>

        </div>
    )
}
export default Header;