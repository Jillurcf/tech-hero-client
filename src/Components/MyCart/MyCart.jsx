import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const cartProducts = useLoaderData();

  console.log(cartProducts);
  const [cartdata, setCartdata] = useState(cartProducts)

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addcart/delete/${id}`, {
            method: 'DELETE',
           
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Product has been deleted.", "success");
              const remining = cartdata.filter(cd => cd._id !== id)
              setCartdata(remining)
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-center text-7xl font-bold text-bule-600">My cart</h2>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 m-24">
    {
        cartdata.map(cp=>
          <div key={cp._id} >
       
          <div  className="card w-full bg-pink-100 shadow-xl">
            <figure>
              <img src={cp.image} alt="image" />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title">{cp.name}</h2>
                <button className="btn btn-secondary font-bold">
                 Add 
                </button>
              </div>
              <div className="flex justify-between">
                <h2 className="card-title">{cp.price}</h2>
                <h2>{cp.type}</h2>
              </div>
              <p>{cp.shortdescription}</p>

              <div className="flex justify-between">
              <div className="card-actions justify-end">
                <button
                onClick={()=>handleDelete(cp._id)}
                
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </div>
              <div className="card-actions justify-start">
                <button
                
                  className="btn btn-accent"
                >
                 Rating: {cp.rating}
                </button>
              </div>
              </div>
            </div>
          </div>
      
      </div>
          )
      }
    </div>
     
    </div>
  );
};

export default MyCart;
