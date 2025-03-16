import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function SignUp() {
  return (
    <div className="flex w-screen h-screen bg-white">
      {/* LEFT SIDE: Big Red Circle */}
      <div className="relative w-1/3 h-full overflow-hidden">
        <div className="absolute w-[200%] h-[200%] bg-red-500 rounded-full -top-1/2 -left-1/2" />
      </div>

      {/* RIGHT SIDE: Sign-Up Form */}
      <div className="flex-1 flex flex-col justify-center items-center">
        {/* Heading */}
        <h2 className="text-xl font-bold mb-6">Create an account!</h2>

        {/* FORM */}
        <div className="w-80">
          {/* First & Surname in one row */}
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none"
            />
            <input
              type="text"
              placeholder="Surname"
              className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none"
            />
          </div>

          {/* Mobile Number */}
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-3 border border-gray-300 rounded focus:outline-none"
          />

          {/* Sign Up Button */}
          <button className="w-full bg-red-500 text-white py-3 rounded font-bold hover:bg-red-600">
            Sign up
          </button>
        </div>

        {/* Already have an account */}
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 font-bold cursor-pointer">
            Login
          </Link>
        </p>

        {/* Divider with "or" */}
        <div className="flex items-center w-80 mt-6 mb-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Sign Up with Google & Facebook */}
        <div className="flex flex-col space-y-3 w-80">
          {/* Google */}
          <button className="flex items-center justify-center border border-gray-300 rounded py-2 hover:bg-gray-100">
            <FaGoogle className="text-red-500 text-xl mr-2" />
            <span className="font-semibold">Sign up with Google</span>
          </button>
          {/* Facebook */}
          <button className="flex items-center justify-center border border-gray-300 rounded py-2 hover:bg-gray-100">
            <FaFacebook className="text-blue-600 text-xl mr-2" />
            <span className="font-semibold">Sign up with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}
