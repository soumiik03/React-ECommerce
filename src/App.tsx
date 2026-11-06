import "./index.css";


const Navbar=()=>{
  return(
    <div className="navbar">
      <h1>LOGO</h1>
      <ul className="menu_items">
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>CART</li>
      </ul>
    </div>
  )
}

const ProductCard=()=>{
  return(
    <div className="product_card">
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>
  )
}

const Product=()=>{
  return(
    <div className="product">
      <img className=" product_img" src="https://media-ik.croma.com/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/267969_0_sfdpf0.png"></img>
      <h1>Canon Camera</h1>
      <p>4.2⭐</p>
      <p>Price :85,000</p>
    </div>
  )
}

const App=()=>{
  return(
    <div>
      <Navbar/>
      <ProductCard/>
    </div>
  )
}

export default App;
