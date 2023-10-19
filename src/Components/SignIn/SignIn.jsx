import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signinwithGoogle, signIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signinwithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const signinUser = { email, password };
    console.log(signinUser);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <form onClick={handleSignin} className="card-body lg:w-[40vw]">
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
                {/* <p onClick={handleGoogleSignIn} className="text-2xl mb-4">Sign in with <span className=" ml-2 underline text-blue-700 font-bold">Google?</span></p> */}
                <p onClick={handleGoogleSignIn} className="text-2xl mb-4">
                  Sign In with
                  <Link className=" ml-2 underline text-blue-700 font-semibold">
                    GOOGLE
                  </Link>
                </p>
                <p className="text-2xl mb-4">
                  Do not have account? Please
                  <Link
                    className=" ml-2 underline text-blue-700 font-semibold"
                    to="/register"
                  >
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
