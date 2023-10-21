import { Link, useLoaderData } from "react-router-dom";
// import BrandDetailCard from "./BrandDetailCard";
import BdSlider from "./BdSlider";

const BrandDetails = () => {
  const brandProducts = useLoaderData();
  console.log(brandProducts);

  return (
    <div>
      <BdSlider brandDetails={brandProducts}></BdSlider>
      <h2 className="text-center font-bold text-7xl mt-24 py-8">
        Features Product
      </h2>

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-8 m-12">
        {brandProducts.map((bdetail) => (
          <div key={bdetail._id} className="card w-full bg-pink-100 shadow-xl">
            <figure>
              <img src={bdetail.image} alt="image" />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">{bdetail.name}</h2>
                <button className="btn btn-secondary font-bold">
                  {bdetail.brandname}
                  
                </button>
              </div>
              <div className="flex justify-between">
                <h2 className="card-title">Price: {bdetail.price}</h2>
                <h2>{bdetail.type}</h2>
              </div>
              {/* <p>{bdetail.shortdescription}</p> */}
              <div className="flex justify-between">
                <div className="card-actions justify-end">
                  {/* <Link to={`/seedetail/${bdetail._id}`}> */}
                  <button className="btn btn-primary">
                    <Link to={`/seedetail/${bdetail._id}`}>
                      {bdetail.addbuttons}
                    </Link>
                  </button>
                  {/* </Link> */}
                </div>
                <div className="card-actions justify-start">
                  <button className="btn btn-accent">
                   Rating: {bdetail.rating}
                  </button>
                </div>
                
              </div>
              <div className="card-actions justify-start mt-4">
                  <button className=" w-full btn btn-secondary">
                    <Link to={`/updateform/${bdetail._id}`}>Update</Link>
                  </button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
