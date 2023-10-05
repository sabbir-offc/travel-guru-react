import { Link, NavLink, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import lightlogo from "../../../public/images/Frame.png";
import darklogo from "../../../public/images/logo.png";
const Navbar = () => {
  const location = useLocation();
  const navLinks = (
    <>
      <li
        className={
          location.pathname === "/"
            ? "text-white font-semibold"
            : "text-black font-semibold"
        }
      >
        <NavLink to="/news">News</NavLink>
      </li>
      <li
        className={
          location.pathname === "/"
            ? "text-white font-semibold"
            : "text-black font-semibold"
        }
      >
        <NavLink to="/destination">Destination</NavLink>
      </li>
      <li
        className={
          location.pathname === "/"
            ? "text-white font-semibold"
            : "text-black font-semibold"
        }
      >
        <NavLink to="/blog">Blog</NavLink>
      </li>

      <li
        className={
          location.pathname === "/"
            ? "text-white font-semibold"
            : "text-black font-semibold"
        }
      >
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li
        className={
          location.pathname === "/"
            ? "text-white font-semibold"
            : "text-black font-semibold"
        }
      >
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-transparent container mx-auto">
      <div className="navbar-start">
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
        <Link to="/" className="cursor-pointer">
          <img src={location.pathname === "/" ? darklogo : lightlogo} alt="" />
        </Link>
      </div>
      {location.pathname === "/logo" && (
        <div className="relative bg-white w-2/4 rounded outline outline-white bg-opacity-40">
          <input
            type="text"
            placeholder="Search your Destination..."
            className="py-3 pl-10 pr-5 focus:outline-none bg-transparent text-white placeholder-white font-medium"
          />

          <span className="absolute text-2xl left-2">
            <FiSearch className="text-white"></FiSearch>
          </span>
        </div>
      )}
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
