import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Slider from "../Home/Slider";


const SignIn = () => {
const {signinwithGoogle} = useContext(AuthContext)

  const handleGoogleSignIn = () =>{
    signinwithGoogle()
    .then(result => {
      console.log(result.user);
    })
    .catch(error=> console.error(error))
  }
  return (
    <div className="h-screen items-center flex">
      <div className="hero items-center">
        <div className=" ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center mt-12 mb-12 font-bold">
              Please Sign In
            </h1>
          </div>
          <div className="card shadow-2xl bg-pink-100">
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

              {/* <div className="w-36 flex">
                  <h2 className="mt-2">Gender</h2>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name="radiomf"
                        value="male"
                        className="radio ml-4"
                        checked
                      />
                      <span className="ml-2 mr-4 label-text">Male</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name="radiomf"
                        value="female"
                        className="radio checked:bg-blue-500"
                        checked
                      />
                      <span className="ml-2 label-text">Female</span>
                    </label>
                  </div>
                </div>
                <div className="w-36 flex">
                  <h2 className="mt-2">Status</h2>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name="radioai"
                        value="active"
                        className="radio ml-4"
                        checked
                      />
                      <span className="ml-2 mr-4 label-text">Active</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name="radioai"
                        value="Inactive"
                        className="radio checked:bg-blue-500"
                        checked
                      />
                      <span className="ml-2 label-text">Inactive</span>
                    </label>
                  </div>
                </div> */}
              <div className="form-control mt-6">
              {/* <p onClick={handleGoogleSignIn} className="text-2xl mb-4">Sign in with <span className=" ml-2 underline text-blue-700 font-bold">Google?</span></p> */}
                <p onClick={handleGoogleSignIn} className="text-2xl mb-4">
                 Sign In with 
                  <Link className=" ml-2 underline text-blue-700 font-semibold" >
                  GOOGLE
                  </Link>
                </p>
                <p className="text-2xl mb-4">
                  Do not have account? Please
                  <Link className=" ml-2 underline text-blue-700 font-semibold" to="/register">
                    Register
                  </Link>
                </p>
                <button className="btn btn-secondary">Sign In</button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default SignIn;
