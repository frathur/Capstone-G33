import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* NAVIGATION BAR */}
      <nav className="flex items-center justify-between py-4 px-8 border-b border-gray-200">
        {/* Left: Brand Name */}
        <div className="text-2xl font-bold text-black">TeachMate</div>

        {/* Middle: Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <li className="cursor-pointer hover:text-black">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-black">
            <Link to="/howitworks">How it works</Link>
          </li>
          <li className="cursor-pointer hover:text-black">
            <Link to="/interface">Interface</Link>
          </li>
        </ul>

        {/* Right: Log in & Try free */}
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="border border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Try free
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="flex flex-col items-center justify-center flex-1 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug mb-4">
          AI For Teachers: <br className="hidden md:block" />
          Your New <span className="text-red-500">Assistant</span> In Education
        </h1>

        <p className="max-w-xl text-gray-700 mb-8">
          Increase the efficiency of the learning process and adapt class
          materials to create an individual approach to students.
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
          <Link
            to="/start"
            className="bg-red-500 text-white px-6 py-3 rounded font-semibold hover:bg-red-600 transition"
          >
            Start Now
          </Link>
          <Link
            to="/learnmore"
            className="border border-black text-black px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
          >
            Learn more
          </Link>
        </div>
      </main>
    </div>
  );
}
