import { Link } from "react-router-dom";

const Register = () => {
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
            <form className="card-body lg:w-[50vw]">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <p className="text-2xl mb-4">
                  Already have an account? Please
                  <Link
                    className="ml-2 underline text-blue-700 font-semibold"
                    to="/signin"
                  >
                    Sign In
                  </Link>
                </p>
                <button className="btn btn-secondary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
