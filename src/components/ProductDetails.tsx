import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
    const [SingleProduct,setSingleProduct]=useState(null);
    const params= useParams();

    useEffect(() => {
        fetchData()
        const timer=setInterval(()=>{
            console.log("Fn Component")
        },1000)
        return()=>{                //Cleanup
            clearInterval(timer);
        }
    }, []);

    const fetchData = async () => {
        const data = await fetch(`https://api.freeapi.app/api/v1/public/randomproducts/${params}`)
        const resData = await data.json();
        setSingleProduct(resData);
    };
    return (
        <div>
            <h1>Product Details</h1>
        </div>
    );
};
