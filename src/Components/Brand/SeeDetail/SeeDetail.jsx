import { data } from "autoprefixer";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";





const SeeDetail = () => {
  const seedetails = useLoaderData()
  console.log(seedetails);
    

    const handleAddCart = () =>{
        fetch('http://localhost:5000/addcart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(seedetails)
        })
        .then(res =>res.json())
        .then(data=> {
            console.log(data);
            new Swal('Product added to CART')
        })
        
    }


    return (
        <div>
            <h1 className="text-center text-6xl font bold">See Detail</h1>
          
            <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={seedetails.image} alt="image" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{seedetails.name}</h2>
            <button className="btn btn-secondary font-bold">{seedetails.brandname}</button>
          </div>
          <div className="flex justify-between">
            <h2 className="card-title">Price: {seedetails.price}</h2>
            <h2>{seedetails.type}</h2>
          </div>
          <p>{seedetails.shortdescription}</p>
          
          <div className="card-actions justify-center">
           
            <button onClick={handleAddCart} className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SeeDetail;