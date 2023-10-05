import { Link } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className="bg-white py-4 h-fit">
      <Navbar></Navbar>
      <div className="md:max-w-lg mx-auto mb-8 mt-8 items-center flex flex-col">
        <form className="space-y-12 border p-8 w-full">
          <h3 className="text-2xl text-black font-bold mb-12">Login</h3>
          <div className="form-control">
            <input
              type="email"
              placeholder="Username or Email"
              className="py-3 px-2 text-black placeholder-black font-medium bg-transparent border-b-2 border-[#C5C5C5] outline-none"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Passowrd"
              className="px-2 py-3 text-black placeholder-black font-medium bg-transparent border-b-2 border-[#C5C5C5] outline-none"
              required
            />
            <div className=" mt-6 flex items-center justify-between">
              <div className="-ml-2.5 inline-flex items-center">
                <label
                  className="relative flex cursor-pointer items-center rounded-full p-3"
                  htmlFor="checkbox"
                  data-ripple-dark="true"
                >
                  <input
                    type="checkbox"
                    className=" before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-black transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                    id="checkbox"
                  />
                  <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px cursor-pointer select-none font-medium text-black"
                  htmlFor="checkbox"
                >
                  Remember Me
                </label>
              </div>
              <div>
                <a className="text-base font-medium text-[#F9A51A] underline cursor-pointer">
                  Forgot Password
                </a>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="p-3 bg-[#F9A51A] text-black w-full mx-3 font-medium"
          >
            Login
          </button>
        </form>
        <p className="text-base font-medium text-black text-center mt-4">
          Dont have an account?{" "}
          <Link className="text-[#F9A51A] underline" to="/register">
            Create an account
          </Link>
        </p>
        <div className="w-full">
          <div className="divider text-black">Or</div>
          <span className="text-black flex cursor-pointer items-center justify-center gap-10 w-fit px-4 py-3 border-2 border-gray-800 rounded-3xl text-base font-semibold mx-auto">
            <FaFacebook></FaFacebook> Continue With Facebook
          </span>
          <span className="text-black flex cursor-pointer items-center justify-center gap-10 w-fit px-4 mt-3 py-3 border-2 border-gray-800 rounded-3xl text-base font-semibold mx-auto">
            <FaGoogle></FaGoogle> Continue With Facebook
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
