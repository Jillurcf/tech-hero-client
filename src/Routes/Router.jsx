import {
    
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../MainLayout/Roots";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import AddProcut from "../Components/AddProduct/AddProcut";
import MyCart from "../Components/MyCart/MyCart";
import Register from "../Components/Register/Register";
import SignIn from "../Components/SignIn/SignIn";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addproduct',
            element: <AddProcut></AddProcut>
        },
        {
            path: '/mycart',
            element: <MyCart></MyCart>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/signin',
            element: <SignIn></SignIn>
        }
      ]
    },
  ]);
  
  export default router;