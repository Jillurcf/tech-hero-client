const BrandDetailCard = ({ bdetails }) => {
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
  } = bdetails;

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="image" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{name}</h2>
            <button className="btn btn-secondary font-bold">{brandname}</button>
          </div>
          <div className="flex justify-between">
            <h2 className="card-title">Price: {price}</h2>
            <h2>{type}</h2>
          </div>
          <p>{shortdescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{addbuttons}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetailCard;
