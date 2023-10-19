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

import BrandDetails from "../Components/Brand/BrandDetails";
import ProductCard from "../Components/Home/productCard";
import AboutUs from "../Components/Home/AboutUs";
import GivFeedBack from "../Components/Home/GiveFeedBack";
// import BrandDetailCard from "../Components/Brand/BrandDetailCard";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/addedproduct')
        },
        {
            path: '/addproduct',
            element: <PrivateRoute><AddProcut></AddProcut></PrivateRoute>
        },
        
        {
            path: '/mycart',
            element: <MyCart></MyCart>
        },
        // {
        //   path: '/ourproducts',
        //   element: <ProductCard></ProductCard>
        // },
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
          

        },
        {
          path: '/brandDetails/:id',
          element: <PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
          loader: ()=> fetch(`http://localhost:5000/addedproduct`)
        },
        {
          path: '/aboutus',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/contactus',
          element: <GivFeedBack></GivFeedBack>
        }
      ]
    },
  ]);
  
  export default router;