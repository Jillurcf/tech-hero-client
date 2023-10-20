import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, user } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
   
    console.log(name, photo, email, password);
    if (password.length < 6) {
      new Swal("The password is less than 6 characters");
    }

    if (!/[A-Z]/.test(password)) {
      return new Swal(
        "Password should have one capital letter and one special character"
      );
    } else if (!/[!@#$%^&*]/.test(password)) {
      return new Swal(
        "Password should have one capital letter and one special character"
      );
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://i.ibb.co/BKnRMYC/Profile-Jillur.png",
        })
          .then(() => console.log("profile updated"))
          .catch();

          const createdAt = result.user?.metadata.creationTime;

        const user = {email, password, createdAt: createdAt}
        fetch("https://assignment10-server-2dhpqnf17-jillurs-projects.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log(data);
              console.log("user added to the database");
            }
          });
      })
      .catch((error) => {
        console.error(error);
      });


        e.target.reset();

       


       
        // const user = { email, createdAt: createdAt };
        
    new Swal("Registration SuccessFull");

   
  };

  return (
    <div className="h-screen items-center flex">
      <div className="hero items-center">
        <div className=" ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center mt-12 mb-12 font-bold">
              Please Register
            </h1>
          </div>
          <div className="card shadow-2xl bg-pink-100">
            <form onSubmit={handleRegister} className="card-body lg:w-[50vw]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phot</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Yout photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
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
