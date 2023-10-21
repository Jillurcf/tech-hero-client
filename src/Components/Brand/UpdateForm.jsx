import Swal from "sweetalert2";
import { useLoaderData, useParams} from "react-router-dom";

const UpdateForm = () => {
const addedproduct = useLoaderData()
console.log(addedproduct);
const {id} = useParams()


    const handleUpdate = e =>{
        console.log("updated");
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandname = form.brandname.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        // const addbuttons = addbutton;
        console.log(image, name, brandname, type, price, rating,  );
        const updateProduct = {image, name, brandname, type, price, rating}
        console.log(updateProduct);
        fetch(`https://assignment10-server-2dhpqnf17-jillurs-projects.vercel.app/addedproduct/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateProduct)
        })
       .then(res => res.json())
        .then(data => console.log(data))
        new Swal('Product Updated')
        e.target.reset();
      }


    return (
        <div>
                      <div className="hero">
        <div className=" ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center mt-12 mb-12 font-bold">
             Update Here
            </h1>
          </div>
          <div className="card shadow-2xl bg-pink-100">
            <form onSubmit={handleUpdate} className="card-body lg:w-[50vw]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  name="brandname"
                  placeholder="Brand Name"
                  className="input input-bordered"
                  required
                />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <input
                  type="text"
                  name="type"
                  placeholder="Type"
                  className="input input-bordered"
                  required
                />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
               
              </div>
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered"
                  required
                />
               
              </div>    

              <div className="form-control mt-6">
               
                <button className="btn btn-secondary">Update Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default UpdateForm;