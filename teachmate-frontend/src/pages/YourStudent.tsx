// src/pages/YourStudents.tsx
import React from "react";
import {
  FaUserCircle,
  FaCommentDots,
  FaFolderOpen,
  FaUserFriends,
  FaCog,
  FaUserPlus,
  FaUserGraduate,
} from "react-icons/fa";

type SidebarButtonProps = {
  label: string;
  icon: React.ReactElement;
  active?: boolean;
};

const SidebarButton: React.FC<SidebarButtonProps> = ({ label, icon, active }) => (
  <button
    className={`flex items-center gap-3 px-4 py-2 rounded transition ${
      active ? "bg-red-500 text-white" : "text-gray-800 hover:bg-red-100"
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const NavButton: React.FC<{ label: string }> = ({ label }) => (
  <button className="hover:text-black">{label}</button>
);

const YourStudents: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-white">
      {/* LEFT SIDEBAR */}
      <aside className="w-72 bg-[#FFECEC] rounded-r-[2rem] flex flex-col py-8 px-6">
        {/* Brand */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">TeachMate</h1>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col space-y-4">
          <SidebarButton label="New chat" icon={<FaCommentDots />} />
          <SidebarButton label="Your materials" icon={<FaFolderOpen />} />
          <SidebarButton label="Your Students" icon={<FaUserFriends />} active />
          <SidebarButton label="Settings" icon={<FaCog />} />
        </nav>
      </aside>

      {/* RIGHT CONTENT AREA */}
      <div className="flex-1 flex flex-col">
        {/* TOP NAV with centered links */}
        <header className="flex items-center justify-between px-6 py-4 border-b">
          {/* Left spacer */}
          <div className="w-1/3 hidden md:flex"></div>
          {/* Centered Nav Links */}
          <nav className="flex-1 flex justify-center space-x-6 text-gray-700 font-semibold">
            <NavButton label="About" />
            <NavButton label="How it works" />
            <NavButton label="Interface" />
          </nav>
          {/* Right: User Icon */}
          <div className="w-1/3 flex justify-end">
            <FaUserCircle className="text-2xl text-gray-600 cursor-pointer" />
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 flex flex-col items-center gap-6">
          {/* Teachers Card */}
          <div className="w-full max-w-3xl bg-gray-50 rounded-md shadow p-6">
            <h2 className="text-xl font-bold text-black mb-4">Teachers</h2>
            <div className="flex justify-center">
              <a
                href="#"
                className="flex items-center gap-1 text-red-500 hover:underline text-sm font-semibold"
              >
                <FaUserPlus />
                Invite Teacher
              </a>
            </div>
          </div>

          {/* Students Card */}
          <div className="w-full max-w-3xl bg-gray-50 rounded-md shadow p-6 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">Students</h2>
            {/* Placeholder illustration */}
            <div className="w-full bg-white rounded-md h-48 flex items-center justify-center">
              {/* Replace this with your actual image */}
              <img
                src="https://via.placeholder.com/300x150?text=Students+Illustration"
                alt="Students illustration"
                className="max-h-full"
              />
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                className="flex items-center gap-1 text-red-500 hover:underline text-sm font-semibold"
              >
                <FaUserGraduate />
                Add student
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default YourStudents;
