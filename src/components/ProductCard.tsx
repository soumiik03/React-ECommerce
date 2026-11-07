import { Product } from "./Product";
import { useEffect, useState } from "react";

interface ProductType {
  _id: number;
  title: string;
  des: string;
  oldPrice: number;
  price: number;
  brand: string;
  image: string;
  isNew: boolean;
  category: string;
}

export const ProductCard = () => {
  //local state variable
  const[ListofProduct,setListofProduct]=useState<ProductType[]>([]); //Array destructuring

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData=async()=>{
    const data=await fetch("https://fakestoreapi.noksha.dev/api/walmartproducts")
    const resData=await data.json();
    //console.log(resData)
    setListofProduct(resData.data)
  }
  return (
    <div>
      <button className="simple-btn" onClick={()=>{
    
        const result=ListofProduct.filter(product=>product.price>=500) //filtered products
        setListofProduct(result);

      }}style={{"marginLeft": "20px", "padding":"5px","marginTop":"10px" }}>Sort by Price</button>

      <div className="product_card">
        {/* <Product pro={ProductList[0]}/> */}
        {ListofProduct.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};
