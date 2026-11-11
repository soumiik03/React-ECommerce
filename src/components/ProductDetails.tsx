import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "./Skeleton";
import { useGetSingleProduct } from "@/hooks/useGetSingleProduct";
import { useDispatch } from "react-redux";
import { addItems } from "@/store/cartSlice";

export const ProductDetails = () => {
    const {productId}= useParams();
    const SingleProduct=useGetSingleProduct(productId)
    const dispatch=useDispatch();

    

/*     const fetchData = async () => {
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

    if(SingleProduct==null){
        return<h1>Loading...</h1>
    }
    
    const handleCartItems=()=>{
        dispatch(addItems(SingleProduct))
    }

    const{image,title,price,brand}=SingleProduct;

    return (
        <div className="product product-details">
            <img src={image}/>
            <h1>{title}</h1>
            <p>{brand}</p>
            <p>{price}</p>
            <button onClick={handleCartItems} className="bg-black text-white p-1 rounded-md">Add to Cart</button>
        </div>
    );
};
