import UserContext from "@/utils/createContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
  //let btnName="Light";
  const[theme,setTheme]=useState("Light");

  const user=useContext(UserContext)

    return(
      <div className="navbar">
        <h1>AJIO</h1>
        <ul className="menu_items">
          <li><Link to="/men">MEN</Link></li>
          <li>WOMEN</li>
          <li><Link to="/kid">KIDS</Link></li>
          <li>CART</li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/grocery">GROCERY</Link></li>
          <li>{user.name}</li>
          <button className="theme" onClick={()=>{
            theme=="Light"? setTheme("Dark"): setTheme("Light")
          }}>{theme}</button>
        </ul>
      </div>
    )
}
export default Navbar; //See 13 Min