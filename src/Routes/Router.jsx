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
import Banner from "../Components/Home/Banner";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('https://assignment10-server-6fej5x89j-jillurs-projects.vercel.app/addedproduct')
        },
        {
            path: '/addproduct',
            element: <PrivateRoute><AddProcut></AddProcut></PrivateRoute>
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
        },
        {
          path: '/banner',
          element: <Banner></Banner>,
          loader: ()=> fetch('https://assignment10-server-6fej5x89j-jillurs-projects.vercel.app/addedproduct')

        }
      ]
    },
  ]);
  
  export default router;