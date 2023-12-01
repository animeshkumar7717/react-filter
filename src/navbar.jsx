import React from "react";
// import './index.css'
const Navbar = ({background}) => {
    return (
        <div className="navbar">
            <span>Photo Editor</span>
            <input type='text' placeholder="Image Link" onChange={(e)=>{background(e.target.value)}}></input>
        </div>
    )
}

export default Navbar