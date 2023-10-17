import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const NavBar = () => {
  const {user, loggedOut} = useContext(AuthContext)



  const navLinks = (
    <>
      <li>
       
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
     
      </li>
      <li>
       
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Add Product
        </NavLink>
     
      </li>
      <li>
       
        <NavLink
          to="/mycart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          My Cart
        </NavLink>
     
      </li>
     
    </>
  );


  const handleLogOut = ()=>{
    loggedOut()
    .then(result => console.log(result.user))
    .catch(error=> console.log(error))
  }
  return (
    <div className="">
      <div className="navbar bg-pink-100">
        <div className="navbar-start md:px-12">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="w-10">
            <img src="/src/assets/logo.png" alt="" />
           
          </a>
          <h1 className="px-2 text-2xl text-pink-400 font-bold">TechHero</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
              {navLinks}
          </ul>
        </div>
        <div className="navbar-end">

        
{
  user?.email ? <div className="dropdown z-30 dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={user.photoURL} alt={user.displayName} />
      </div>
      
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><button className="btn btn-sm btn-ghost">{user.displayName}</button></li>
        <li>
          <button className="btn btn-sm btn-ghost"
          onClick={handleLogOut}
          >Log Out</button>
        </li>
      </ul>
     </div>
     :
     <Link to='/signin'>
      <button className="btn btn-secondary">Login</button>
     </Link>
}
  {/* {
    user?.email ?
    <button onClick={handleLogOut} className="btn btn-secondary"><Link >Log out</Link></button>
    :
    <button className="btn btn-secondary"><Link to="/login">Login</Link></button>
  }
  */}
  
</div>
        {/* <div className="navbar-end md:mx-12">
         <Link to='/signin'> <button className="btn btn-secondary">Log In</button></Link>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
