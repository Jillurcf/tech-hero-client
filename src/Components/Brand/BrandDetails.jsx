import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandDetailCard from "./BrandDetailCard";


const BrandDetails = () => {
    const [brandDetails, setBrandDetails]  = useState([])
    console.log(brandDetails);
    const brandProducts = useLoaderData()
    // const {_id} = brandProducts;
    const {id} = useParams()
    // console.log(brandProducts);
    // console.log(brandDetails);
    fetch(`http://localhost:5000/addedproduct/${id}`, {
        method: "GET",
      
    })
    .then(res=> res.json())
    .then(data=> {
        setBrandDetails(data)
        console.log(data);
    })
    
    return (
        <div>
            <h2 className="text-center font-bold text-4xl">Product Detail</h2>
            {
                brandDetails.map(bdetail=> 
                    <div key={bdetail._id} className="card w-full bg-base-100 shadow-xl">
                    <figure>
                      <img src={bdetail.image} alt="image" />
                    </figure>
                    <div className="card-body">
                      <div className="flex justify-between">
                        <h2 className="card-title">{bdetail.name}</h2>
                        <button className="btn btn-secondary font-bold">{bdetail.brandname}</button>
                      </div>
                      <div className="flex justify-between">
                        <h2 className="card-title">Price: {bdetail.price}</h2>
                        <h2>{bdetail.type}</h2>
                      </div>
                      <p>{bdetail.shortdescription}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">{bdetail.addbuttons}</button>
                      </div>
                    </div>
                  </div>
                    
                    )
            }
          
          
        </div>
    );
};

export default BrandDetails;