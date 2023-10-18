import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const BrandDetails = () => {
    const [brandDetails, setBrandDetails]  = useState([])
    const {brandname} = useParams()
    const brandProducts = useLoaderData()
    useEffect(()=>{
        const findBrand = brandProducts.find(item=> item.brandname === brandname)
        setBrandDetails(findBrand)
    },[brandname, brandProducts])
    return (
        <div>
            <h2>Brand detail here</h2>
        </div>
    );
};

export default BrandDetails;