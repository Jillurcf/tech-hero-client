import { useLoaderData } from "react-router-dom";
import ProductCard from "./productCard";
import Banner from "./Banner";
import PlaceOrderForm from "./PlaceOrderForm";
import AboutUs from "./AboutUs";



const Home = () => {
    const addedUsers = useLoaderData()
    console.log(addedUsers);
    return (
        
        <div>
             <Banner></Banner>
            <div className="bg-pink-100 pb-36">
            <h1 className="text-center text-6xl font-bold py-36 pt-48"> <span className="bg-pink-400 py-8 px-24 rounded-2xl text-white">Our Products</span></h1>
            <div className=" px-60 gap-8 mx-auto grid md:grid-cols-3">
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
            <PlaceOrderForm></PlaceOrderForm>
        </div>
    );
};

export default Home;