import { Product } from "./Product";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

interface ProductType {
  id: number;
  title: string;
  description: string;
  oldPrice?: number;
  price: number;
  brand?: string;
  image: string;
  isNew?: boolean;
  category: string;
}

export const ProductCard = () => {
  //local state variable
  const [ListofProduct, setListofProduct] = useState<ProductType[]>([]);
  const [filterProduct, setfilterProduct] = useState<ProductType[]>([]); //Array destructuring
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    const timer=setInterval(()=>{
      console.log("fn comp")
    })
    return()=>{
      clearInterval(timer)
    }
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://fakestoreapi.com/products/"
    );
    const resData = await data.json();
    //console.log(resData)
    setListofProduct(resData);
    setfilterProduct(resData);
  };

  //Conditional Rendering
  /* if(ListofProduct.length===0){
    return(
      <Skeleton/>
    )
  } */

  return ListofProduct.length === 0 ? (
    <Skeleton />
  ) : (
    <div>
      <div>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          style={{ marginLeft: "20px", padding: "5px", marginTop: "10px" }}
          className="textbox"
          type="text"
          placeholder="Enter..."
        />
        <button
          onClick={() => {
            const filtered = ListofProduct.filter((product) => {
              return product.title
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setfilterProduct(filtered);
          }}
          style={{ marginLeft: "20px", padding: "5px", marginTop: "10px" }}
          className="search"
        >
          Search
        </button>
      </div>

      <button
        className="simple-btn"
        onClick={() => {
          const result = ListofProduct.filter(
            (product) => product.price >= 500,
          ); //filtered products
          setfilterProduct(result);
        }}
        style={{ marginLeft: "20px", padding: "5px", marginTop: "10px" }}
      >
        Sort by Price
      </button>

      <div className="product_card">
        {/* <Product pro={ProductList[0]}/> */}
        {filterProduct.map((product) => {
          return (
            <Link key={product.id} to={`/product/${product.id}`}>       {/* Imp */}
              <Product product={product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
