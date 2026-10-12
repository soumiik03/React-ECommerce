import React, { useEffect,useState }from 'react'
import { Link } from 'lucide-react';

const Navbar = () => {
    const[btnName,setbtnName]=useState("Light");

    useEffect(()=>{
        console.log("Use effect Called");
    },[])

    return (
        <div className='Navbar'>
            <h1>Logo</h1>
            <ul className='MenuItems'>
                <li><Link to="/men">Men</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li>Kids</li>
                <li><Link to="/about">About</Link></li>
                <li>Cart</li>
                <button onClick={()={
                    btnName=== "Light" ? setbtnName("Dark"):setbtnName("Light");
                }}></button>
            </ul>

        </div>
    )
}

export default Navbar