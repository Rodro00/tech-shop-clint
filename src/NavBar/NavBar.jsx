import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const NavBar = () => {

  const {user,logOut} = useContext(AuthContext)

  const handleSignOut = () =>{
    logOut()
    .then()
    .catch()
  }

  const links = <>
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/addproduct">Add Product</NavLink></li>
  <li><NavLink to="/mycart">My Cart</NavLink></li>
  </>
  
  return (
    <div className="navbar bg-slate-300 mt-8">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {links}
        </ul>
      </div>
      <div >
        <h1 className="font-bold text-2xl">Tech Shop</h1>
      </div>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {links}
      </ul>
    </div>
    {
        user ?
        <div  className="navbar-end gap-2">
          <p>{user.displayName}</p>
          <img className="w-10  rounded-full" src={user.photoURL} alt="" />
          <button onClick={handleSignOut} className="btn">SignOut</button>       
        </div>
        :
        <div className="navbar-end">
        <Link to="/login">
        <button className="btn">Login</button>
        </Link>
      </div>
      }
  </div>
  );
};

export default NavBar;