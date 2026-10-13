import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
    const [btnName, setbtnName] = useState("Light");

    useEffect(() => {
        console.log("Use effect Called");
    }, []);

    return (
        <div className="Navbar">
            <h1>Logo</h1>
            <ul className="MenuItems">
                <li><RouterLink to="/men">Men</RouterLink></li>
                <li><RouterLink to="/women">Women</RouterLink></li>
                <li>Kids</li>
                <li><RouterLink to="/about">About</RouterLink></li>
                <li>Cart</li>
                <button
                    onClick={() => {
                        btnName === "Light" ? setbtnName("Dark") : setbtnName("Light");
                    }}
                >
                    {btnName}
                </button>
            </ul>
        </div>
    );
};

export default Navbar;