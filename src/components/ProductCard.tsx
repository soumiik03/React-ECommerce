import { ProductList } from "@/utils/ProductList"
import { Product } from "./Product"

export const ProductCard=()=>{
    return(
      <div className="product_card">
        {/* <Product pro={ProductList[0]}/> */}
        { ProductList.map((product) => {
            return(
              <Product key={product._id} product={product}/>
            )
          })
        }
      </div>
    )
}
