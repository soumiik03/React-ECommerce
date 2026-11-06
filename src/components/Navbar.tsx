import { useState } from "react";

const Navbar=()=>{
  //let btnName="Light";
  const[theme,setTheme]=useState("Light");
    return(
      <div className="navbar">
        <h1>LOGO</h1>
        <ul className="menu_items">
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>CART</li>
          <button className="theme" onClick={()=>{
            theme=="Light"? setTheme("Dark"): setTheme("Light")
          }}>{theme}</button>
        </ul>
      </div>
    )
}
export default Navbar; //See 13 Min