import { Link } from "react-router-dom";

const ProductCard = ({ users }) => {
  const {
    _id,
    image,
    name,
    brandname,
    type,
    price,
    shortdescription,
    rating,
    addbuttons,
  } = users;

  return (
    <div className="">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="image" />
        </figure>
        <div className="card-body">
          <div className="">
           
            <button className="btn btn-secondary w-full font-bold">
              <Link to={`/brandDetails/${brandname}`}>{brandname}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
