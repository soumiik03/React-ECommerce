import { ProductList } from "@/utils/ProductList";
import { Product } from "./Product";
import { useState } from "react";

export const ProductCard = () => {
  //local state variable
  const[ListofProduct,setListofProduct]=useState(ProductList); //Array destructuring

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
