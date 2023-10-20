import { useLoaderData } from "react-router-dom";
import ProductCard from "./productCard";
import Banner from "./Banner";

import AboutUs from "./AboutUs";
import GivFeedBack from "./GiveFeedBack";



const Home = () => {
    const addedUsers = useLoaderData()
    console.log(addedUsers);
    return (
        
        <div>
             <Banner></Banner>
            <div className="bg-pink-100 md:pb-36">
            <h1 className="text-center pt-12 pb-12 md:text-6xl font-bold md:py-36 md:pt-48"> <span className="bg-pink-400 lg:py-8  lg:px-24 p-2 rounded-2xl text-white">Our Products</span></h1>
            <div className=" lg:px-60 gap-8 mx-auto grid md:grid-cols-3">
            {
                addedUsers.map(users =>
                 <div key={users._id}>
                  {/* <Banner key={users._id} users={users}></Banner> */}
                     <ProductCard key={users._id} users={users}></ProductCard> 
                
                </div>
                )
            }
            </div>
           
           
            </div>
            <AboutUs></AboutUs>
            <GivFeedBack></GivFeedBack>
           
        </div>
    );
};

export default Home;