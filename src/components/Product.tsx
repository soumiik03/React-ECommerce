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