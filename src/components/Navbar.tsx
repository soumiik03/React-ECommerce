import UserContext from "@/utils/createContext";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar=()=>{
  //let btnName="Light";
  const[theme,setTheme]=useState("Light");

  const user=useContext(UserContext)
  const navigate = useNavigate();
  
  const cartItems = useSelector((store: any) => store?.cart?.cartItems ?? []);

    return(
      <div className="navbar">
        <h1>AJIO</h1>
        <ul className="menu_items">
          <li><Link to="/men">MEN</Link></li>
          <li>WOMEN</li>
          <li><Link to="/kid">KIDS</Link></li>
          <li>
            <button
              type="button"
              onClick={() => navigate("/cart")}
              style={{ border: "none", padding: 0, background: "none", color: "inherit", font: "inherit", letterSpacing: "inherit", cursor: "pointer" }}
            >
              CART ({cartItems.length})
            </button>
          </li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/grocery">GROCERY</Link></li>
          <li>{user.name}</li>
          <button className="theme" onClick={()=>{
            theme === "Light" ? setTheme("Dark") : setTheme("Light")
          }}>{theme}</button>
        </ul>
      </div>
    )
}
export default Navbar; //See 13 Min