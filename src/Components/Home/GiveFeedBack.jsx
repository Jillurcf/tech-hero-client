const GivFeedBack = () => {
    return (
      <div className="bg-slate-300">
        <div className="h-screen items-center flex">
          <div className="hero items-center">
            <div className=" ">
              <div className="text-center lg:text-left">
                <h1 className="lg:text-5xl text-2xl text-white text-center lg:mt-0 lg:-mb-0  mt-36  -mb-12 font-bold">
                  Please Give your FeedBack
                </h1>
              </div>
              <div className="card shadow-2xl bg-pink-300">
                <form className="card-body lg:w-[40vw]">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Contact No</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="contact no"
                      className="input input-bordered"
                      required
                    />
                    <label className="label"></label>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Give FeedBack</span>
                    </label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    {/* <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label> */}
                  </div>
  
                  <div className="form-control mt-6">
                    <button className="btn btn-secondary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default GivFeedBack;
  