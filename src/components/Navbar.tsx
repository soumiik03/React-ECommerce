import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
  //let btnName="Light";
  const[theme,setTheme]=useState("Light");
    return(
      <div className="navbar">
        <h1>LOGO</h1>
        <ul className="menu_items">
          <li><Link to="/men">MEN</Link></li>
          <li>WOMEN</li>
          <li><Link to="/kid">KIDS</Link></li>
          <li>CART</li>
          <button className="theme" onClick={()=>{
            theme=="Light"? setTheme("Dark"): setTheme("Light")
          }}>{theme}</button>
        </ul>
      </div>
    )
}
export default Navbar; //See 13 Min