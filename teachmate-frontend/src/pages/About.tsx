// src/pages/About.tsx
import React from "react";
import { Link } from "react-router-dom";

// Replace this with the actual illustration you have
// Example: import ClassroomImg from "../assets/classroom-illustration.png";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* NAVIGATION BAR */}
      <nav className="flex items-center justify-between py-4 px-8 border-b border-gray-200">
        {/* Left: Brand Name */}
        <div className="text-2xl font-bold text-black">TeachMate</div>

        {/* Middle: Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <li>
            <Link to="/about" className="cursor-pointer hover:text-black">
              About
            </Link>
          </li>
          <li>
            <Link to="/howitworks" className="cursor-pointer hover:text-black">
              How it works
            </Link>
          </li>
          <li>
            <Link to="/interface" className="cursor-pointer hover:text-black">
              Interface
            </Link>
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

      {/* MAIN CONTENT */}
      <main className="flex-1 px-8 py-10">
        {/* HERO SECTION: Empowering Teachers with AI */}
        <section className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
              Empowering Teachers with AI
            </h1>
            <p className="text-gray-700 mb-6">
              TeachMate is designed to support teachers by simplifying routine
              tasks and increasing efficiency.
            </p>
            <Link
              to="/learnmore"
              className="bg-red-500 text-white px-6 py-3 rounded font-semibold hover:bg-red-600 transition"
            >
              Learn More
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Replace src with your actual illustration image */}
            <img
              src="https://via.placeholder.com/400x250?text=Classroom+Illustration"
              alt="Classroom illustration"
              className="w-full max-w-md"
            />
          </div>
        </section>

        {/* WHY CHOOSE TEACHMATE? */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-4">
            Why Choose TeachMate?
          </h2>
          <p className="text-center text-gray-700 mb-8">
            TeachMate empowers teachers with these key features:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="p-6 border rounded-lg text-center hover:shadow transition">
              <h3 className="text-lg font-semibold mb-2">
                Personalizing Training
              </h3>
              <p className="text-sm text-gray-600">
                Adapt lesson plans to each student’s unique needs.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 border rounded-lg text-center hover:shadow transition">
              <h3 className="text-lg font-semibold mb-2">Automate Tasks</h3>
              <p className="text-sm text-gray-600">
                Reduce repetitive tasks and focus on teaching.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 border rounded-lg text-center hover:shadow transition">
              <h3 className="text-lg font-semibold mb-2">Engagement Tools</h3>
              <p className="text-sm text-gray-600">
                Keep students actively involved with interactive content.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="p-6 border rounded-lg text-center hover:shadow transition">
              <h3 className="text-lg font-semibold mb-2">Analyzing Results</h3>
              <p className="text-sm text-gray-600">
                Track performance and improve lesson strategies.
              </p>
            </div>
          </div>
        </section>

        {/* HOW TEACHMATE WORKS */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-4">
            How TeachMate Works
          </h2>
          <p className="text-center text-gray-700 mb-8 max-w-xl mx-auto">
            Three simple steps to make the learning process more effective and
            personalized.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            {/* Step 1 */}
            <div className="max-w-xs text-center">
              <div className="mb-4">
                <span className="inline-block w-16 h-16 bg-red-100 text-red-500 text-2xl font-bold rounded-full flex items-center justify-center">
                  1
                </span>
              </div>
              <h3 className="font-semibold mb-2">Download Your Materials</h3>
              <p className="text-sm text-gray-600">
                Add lessons and plans for TeachMate to analyze.
              </p>
            </div>

            {/* Step 2 */}
            <div className="max-w-xs text-center">
              <div className="mb-4">
                <span className="inline-block w-16 h-16 bg-red-100 text-red-500 text-2xl font-bold rounded-full flex items-center justify-center">
                  2
                </span>
              </div>
              <h3 className="font-semibold mb-2">Analysis And Personalization</h3>
              <p className="text-sm text-gray-600">
                TeachMate analyzes your materials and adapts them to each
                student’s needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="max-w-xs text-center">
              <div className="mb-4">
                <span className="inline-block w-16 h-16 bg-red-100 text-red-500 text-2xl font-bold rounded-full flex items-center justify-center">
                  3
                </span>
              </div>
              <h3 className="font-semibold mb-2">Monitoring Results</h3>
              <p className="text-sm text-gray-600">
                Track student progress and get recommendations for further
                improvement.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
