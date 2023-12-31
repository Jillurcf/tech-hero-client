import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const SeeDetail = () => {
  const seedetails = useLoaderData();
  const { image, name, brandname, type, price, shortdescription, rating } =
    seedetails;
  const dataToCart = {
    image,
    name,
    brandname,
    type,
    price,
    shortdescription,
    rating,
  };
  console.log(dataToCart);

  const handleAddCart = () => {
    fetch(
      "https://assignment10-server-2dhpqnf17-jillurs-projects.vercel.app/addcart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(dataToCart),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        new Swal("Product added to CART");
      });
  };

  return (
    <div className="lg:px-24 px-4">
      <h1 className="text-center text-7xl font-bold pt-36">See Detail</h1>

      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={seedetails.image} alt="image" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{seedetails.name}</h2>

            <div className="">
              <button className="btn btn-secondary w-full font-bold">
                <Link to={`/brandDetails/${brandname}`}>{brandname}</Link>
              </button>
            </div>

            {/* <button className="btn btn-secondary font-bold">{seedetails.brandname}</button> */}
          </div>
          <div className="flex justify-between">
            <h2 className="card-title">Price: {seedetails.price}</h2>
            <h2>{seedetails.type}</h2>
          </div>
          <p>{seedetails.shortdescription}</p>

          <div className="card-actions justify-center">
            <button onClick={handleAddCart} className="btn btn-primary">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeDetail;
