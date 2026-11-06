import "./index.css";
import Navbar from "./components/Navbar"; //Default export
import {ProductCard} from "./components/ProductCard"; //named export 

const App=()=>{
  return(
    <div>
      <Navbar/>
      <ProductCard/>
    </div>
  )
}

export default App;
