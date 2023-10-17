import { useRef, useState } from "react";


const AddProcut = () => {
  const buttonRef = useRef()
  const [addbutton, setAddbutton] = useState(null)
  const handleClick = ()=>{
    setAddbutton(buttonRef.current.value);
  }

  const handleAddProduct = e =>{
    e.preventDefault()
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandname = form.brandname.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortdescription = form.shortdescription.value;
    const rating = form.rating.value;
    const addbuttons = addbutton;
    console.log(image, name, brandname, type, price, shortdescription, rating, addbuttons  );
  }
    return (
        <div>
              <div className="hero">
        <div className=" ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center mt-12 mb-12 font-bold">
              Please Register
            </h1>
          </div>
          <div className="card shadow-2xl bg-pink-100">
            <form onSubmit={handleAddProduct} className="card-body lg:w-[50vw]">
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
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type="text"
                  name="shortdescription"
                  placeholder="Short description"
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Add Button</span>
                </label>
                <input
                  type="button"
                  value="click Me!"
                  ref={buttonRef}
                  onClick={handleClick}
                  name="addbutton"
                  placeholder="Add button"
                  className="input input-bordered"
                  required
                />
               
              </div>

              <div className="form-control mt-6">
               
                <button className="btn btn-secondary">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AddProcut;