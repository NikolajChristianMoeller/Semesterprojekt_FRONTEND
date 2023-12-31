import { Route, Navigate, Outlet, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";
import { useCallback, useState } from "react";
import Login from "./pages/Login";
import Contactpage from "./pages/Contactpage";
import Aboutpage from "./pages/Aboutpage"
import Policiespage from "./pages/Policiespage"
import { useEffect } from "react";
import Product from "./pages/Product";
import restService from "./services/restService";

export default function App() {
  const [cart, setCart] = useState([]);
  const [productIDs, setProductIDs] = useState([]);


  // Loads the contents of the cart from local storage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (savedCart.length > 0) {
      setCart(savedCart);
    }
  }, []);
  //Saves the contents of the cart to local storage
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      // If the cart is empty, remove the "cart" key from localStorage
      localStorage.removeItem("cart");
    }
  }, [cart]);


  const getProductIDs = useCallback(async ()=>{
    const data = await restService.getIDs();
    setProductIDs(data);
  },[])

  const fillCart = (product) => {
    try {
      if (cart.includes(product)) {
        cart[cart.indexOf(product)].amount++;
        setCart([...cart]);
      } else {
        product.amount = 1;
        setCart([...cart, product]);
      }
    } catch (error) {
      console.error("error adding to cart", error);
    }
  };

  const reduceCart = (product) => {
    try {
      if (product.amount > 1) {
        cart[cart.indexOf(product)].amount--;
        setCart([...cart]);
      } else {
        cart.splice([cart.indexOf(product)], 1);
        setCart([...cart]);
      }
    } catch (error) {
      console.error("error adding to cart", error);
    }
  };

  const emptyCart = () => {
    setCart([]);
  };

  const AdminAuth = () => {
    const isAuthenticated = sessionStorage.getItem("authenticated");
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };



  useEffect(()=>{getProductIDs()}, [getProductIDs])
    
  const router = createBrowserRouter(
    createRoutesFromElements(
            
    <Route path="/">
      <Route
      index
      element={
      <HomePage fillCart={fillCart} cart={cart} emptyCart={emptyCart}/>
      }
      />
      <Route
      path="/checkout"
      element={
      <Checkout
      cart={cart}
      fillCart={fillCart}
      reduceCart={reduceCart}
      emptyCart={emptyCart}
      />
      }
      />
      <Route element={<AdminAuth />}>
      <Route
      path="/admin"
      element={<Admin cart={cart} emptyCart={emptyCart} />}
      />
      </Route>
      <Route
      path="login"
      element={<Login cart={cart} emptyCart={emptyCart} />}
      />
      <Route path="/product/:id" element={<Product cart={cart} emptyCart={emptyCart} fillCart={fillCart}/>} />
      <Route path="/contact" element={<Contactpage cart={cart} emptyCart={emptyCart}/>} />
      <Route path="/about" element={<Aboutpage cart={cart} emptyCart={emptyCart}/>}/>
      <Route path="/policies" element={<Policiespage cart={cart} emptyCart={emptyCart}/>}/>
  </Route>
    )

  )

  return (
    <RouterProvider router={router}/>    
  );
}
