export const Product=({product}:any)=>{
    const{title,brand,price,image}=product;
    return(
      <div className="product">
        <img src={image}/>
        <h1>{title}</h1>
        <p>{brand}</p>
        <p>{price}</p>
      </div>
    )
  }
 
export const HOF = (WrappedComponent: (props: any) => any) => {
  return (props: any) => {
    return (
      <div>
        <span className="bg-black text-white px-1 py-4 rounded-md">Best Seller</span>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

//HOF is a fun which takes a comp as a parameter and returns a new ehanced component