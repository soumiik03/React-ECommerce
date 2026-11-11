import "./index.css";
import Navbar from "./components/Navbar"; //Default export
import { ProductCard } from "./components/ProductCard"; //named export
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Kid from "./components/Kid";
import Men from "./components/Men";
import Error from "./components/Error";
import { ProductDetails } from "./components/ProductDetails";
import { About } from "./components/About";
//import Grocery  from "./components/Grocery";
import { lazy, Suspense, useState } from "react";
import CompoA from "./components/CompoA";
import UserContext from "./utils/createContext";
import { Provider } from "react-redux";
import appStore from "./store/store";
import { Cart } from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  const [userName, setUserName] = useState("Soumik");

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ name: userName, setUserName }}>
        
        {/* Can be used in any coponent */}
        <div>
          <Navbar />
          {/* <CompoA /> */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductCard />,
      },
      {
        path: "/kid",
        element: <Kid />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
