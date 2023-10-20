import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
// import BrandDetailCard from "./BrandDetailCard";
import BdSlider from "./BdSlider";
import Swal from "sweetalert2";
import NoProduct from "./NoProduct";

const BrandDetails = () => {
  const navigate = useNavigate()
  const [brandDetails, setBrandDetails] = useState([]);
  console.log(brandDetails);
  const brandProducts = useLoaderData();
  const {brandname } = brandProducts;
  // const { brandname } = useParams();
  // const {id} = useParams()
  console.log(brandProducts);
  // console.log(brandDetails);
  // fetch(`http://localhost:5000/addedproduct/${id}`, {
  //     method: "GET",

  // })
 
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:5000/addedproduct/${brandname}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchData();
  }, [brandname]);


// https://i.ibb.co/1Q9CQLs/samsung-Laptop.jpg



  return (
    <div>
      <BdSlider brandDetails={brandDetails}></BdSlider>
      <h2 className="text-center font-bold text-7xl mt-24 py-8">
        Features Product 
      </h2>
      {
        brandDetails? 
      
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-8 m-12">
        {brandProducts.map((bdetail) => (
             <div key={bdetail._id} className="card w-full bg-pink-100 shadow-xl">
               <figure>
                 <img src={bdetail.image} alt="image" />
               </figure>
               <div className="card-body">
                 <div className="flex justify-between">
                   <h2 className="card-title">{bdetail.name}</h2>
                   <button className="btn btn-primary font-bold">
                     {bdetail.brandname}
                   </button>
                 </div>
                 <div className="flex justify-between">
                   <h2 className="card-title">Price: {bdetail.price}</h2>
                   <h2>{bdetail.type}</h2>
                 </div>
                 <p>{bdetail.shortdescription}</p>
                 <div className="flex justify-between">
                   <div className="card-actions justify-end">
                     <button className="btn btn-primary">
                       <Link to={`/sesdetail/${bdetail._id}`}>
                         {bdetail.addbuttons}
                       </Link>
                     </button>
                   </div>
                   <div className="card-actions justify-start">
                     <button className="btn btn-secondary">Update</button>
                   </div>
                 </div>
               </div>
             </div>
           ))}
        </div>
        :
      
        new Swal("No product available")
      //  <NoProduct></NoProduct>
        
      
      
      }
  
    </div>
  );
};

export default BrandDetails;
