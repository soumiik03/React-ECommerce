import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "./Skeleton";

export const ProductDetails = () => {
    const [SingleProduct,setSingleProduct]=useState(null);
    const {productId}= useParams();
    
    const fetchData = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const resData = await data.json();
        setSingleProduct(resData);
    };

    useEffect(() => {
        fetchData();
        /* const timer=setInterval(()=>{
            console.log("Fn Component")
        },1000)
        return()=>{                //Cleanup
            clearInterval(timer);
        } */
    }, []);

    if(SingleProduct==null){
        return<h1>Loading...</h1>
    }

    const{image,title,price,brand}=SingleProduct;

    return (
        <div className="product">
            <img src={image}/>
            <h1>{title}</h1>
            <p>{brand}</p>
            <p>{price}</p>
        </div>
    );
};
