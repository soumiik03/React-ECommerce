import "./index.css";
import Navbar from "./components/Navbar"; //Default export
import {ProductCard} from "./components/ProductCard"; //named export 
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import Kid from "./components/Kid";
import Men from "./components/Men";
import Error from "./components/Error";
import { ProductDetails } from "./components/ProductDetails";
import { About } from "./components/About";

const App=()=>{
  return(
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}


export const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
        {
          path:"/",
          element:<ProductCard/>
        },
        {
          path:"/kid",
          element:<Kid/>
        },
        {
          path:"/men",
          element:<Men/>
        },
        {
          path:"/product/:productId",
          element:<ProductDetails/>
        },
        {
          path:"/about",
          element:<About/>
        }
      
    ],
    errorElement:<Error/>
  },
  
]);



export default App;
