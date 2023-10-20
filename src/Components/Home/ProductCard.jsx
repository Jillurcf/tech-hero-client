
import { Link } from "react-router-dom";

const ProductCard = ({ users }) => {
    const {_id, image, name, brandname, type, price, shortdescription, rating, addbuttons } = users
   
           
  return (
    <div className="">
     
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>
         <button className="btn btn-secondary font-bold"><Link to={`/brandDetails/${brandname}`}>{brandname}</Link></button>
          </div>
          <div className="flex justify-between">
          <h2 className="card-title">Price: {price}</h2>
          <h2>{type}</h2>
          </div>
          <p>{shortdescription}</p>
          <button className="btn btn-primary">Rating: {rating}</button>
          {/* <div className="card-actions justify-end">
            <button  className="btn btn-primary">{addbuttons}</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
