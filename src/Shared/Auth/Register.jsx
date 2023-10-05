import { Link } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
const Register = () => {
  const { googleSign } = useContext(AuthContext);
  const handleSign = (media) => {
    media()
      .then((res) => {
        const loggedUser = res.user;
        toast.success("Sign in successfull.");
        console.log(loggedUser);
      })
      .catch((err) => {
        toast.error("Sign in Failed.");
        console.log(err);
      });
  };
  return (
    <div className="bg-white h-fit py-4">
      <Navbar></Navbar>
      <div className="md:max-w-lg mx-auto items-center flex flex-col mb-10">
        <form className="space-y-12 border p-8 w-full rounded-md mt-10">
          <h3 className="text-2xl text-black font-bold mb-12">
            Create an account
          </h3>
          <div className="form-control">
            <input
              type="text"
              placeholder="First Name"
              className="py-3 px-2 text-black placeholder-black font-medium bg-transparent border-b-2 border-[#C5C5C5] outline-none"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Last Name"
              className="py-3 px-2 text-black placeholder-black font-medium bg-transparent border-b-2 border-[#C5C5C5] outline-none"
              required
            />
          </div>

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
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Confirm Passowrd"
              className="px-2 py-3 text-black placeholder-black font-medium bg-transparent border-b-2 border-[#C5C5C5] outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="p-3 bg-[#F9A51A] text-black w-full mx-3 font-medium"
          >
            Create an account
          </button>
        </form>
        <p className="text-base font-medium text-black text-center mt-4">
          Already have an account?{" "}
          <Link className="text-[#F9A51A] underline" to="/login">
            Login
          </Link>
        </p>
        <div className="w-full">
          <div className="divider text-black">Or</div>
          <span className="text-black flex cursor-pointer items-center justify-center gap-10 w-fit px-4 py-3 border-2 border-gray-800 rounded-3xl text-base font-semibold mx-auto">
            <FaFacebook></FaFacebook> Continue With Facebook
          </span>
          <span
            onClick={() => handleSign(googleSign)}
            className="text-black flex cursor-pointer items-center justify-center gap-10 w-fit px-4 mt-3 py-3 border-2 border-gray-800 rounded-3xl text-base font-semibold mx-auto"
          >
            <FaGoogle></FaGoogle> Continue With Facebook
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
