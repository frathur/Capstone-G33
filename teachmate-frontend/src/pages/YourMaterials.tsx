// src/pages/YourMaterials.tsx
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaCommentDots,
  FaFolderOpen,
  FaUserFriends,
  FaCog,
  FaGoogleDrive,
  FaYoutube,
  FaPen,
  FaUpload,
  FaLink,
} from "react-icons/fa";

type SidebarButtonProps = {
  label: string;
  icon: React.ReactElement;
  active?: boolean;
  to: string;
};

const SidebarButton: React.FC<SidebarButtonProps> = ({ label, icon, active, to }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-2 rounded transition ${
      active ? "bg-red-500 text-white" : "text-gray-800 hover:bg-red-100"
    }`}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const NavButton: React.FC<{ label: string }> = ({ label }) => (
  <button className="hover:text-black">{label}</button>
);

const YourMaterials: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Hidden file input for Upload
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log("Selected file:", e.target.files[0].name);
      // Implement further upload logic here
    }
  };

  // Placeholder handlers for each icon
  const handleDriveClick = () => {
    console.log("Drive button clicked");
  };
  const handleYouTubeClick = () => {
    console.log("YouTube button clicked");
  };
  const handleCreateClick = () => {
    console.log("Create button clicked");
  };
  const handleLinkClick = () => {
    console.log("Link button clicked");
  };

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
          <SidebarButton label="New chat" icon={<FaCommentDots />} to="/newchat" />
          <SidebarButton label="Your materials" icon={<FaFolderOpen />} active to="/yourmaterials" />
          <SidebarButton label="Your Students" icon={<FaUserFriends />} to="/yourstudent" />
          <SidebarButton label="Settings" icon={<FaCog />} to="/settings" />
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
        <main className="flex-1 p-6 flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl bg-gray-50 rounded-md shadow p-6">
            {/* Title Field */}
            <div className="mb-6">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter title here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full h-12 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            {/* Description Field */}
            <div className="mb-6">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Description (Optional)
              </label>
              <textarea
                placeholder="Enter description here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full h-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
              />
            </div>

            {/* Attach Section */}
            <div>
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Attach
              </label>
              <div className="flex flex-wrap justify-center items-center space-x-6">
                {/* Drive */}
                <div className="flex flex-col items-center">
                  <button
                    onClick={handleDriveClick}
                    className="w-14 h-14 bg-white rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <FaGoogleDrive className="text-xl text-blue-600" />
                  </button>
                  <span className="text-sm text-gray-600 mt-1">Drive</span>
                </div>

                {/* YouTube */}
                <div className="flex flex-col items-center">
                  <button
                    onClick={handleYouTubeClick}
                    className="w-14 h-14 bg-white rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <FaYoutube className="text-xl text-red-500" />
                  </button>
                  <span className="text-sm text-gray-600 mt-1">YouTube</span>
                </div>

                {/* Create */}
                <div className="flex flex-col items-center">
                  <button
                    onClick={handleCreateClick}
                    className="w-14 h-14 bg-white rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <FaPen className="text-xl text-gray-700" />
                  </button>
                  <span className="text-sm text-gray-600 mt-1">Create</span>
                </div>

                {/* Upload with Hidden File Input */}
                <div className="flex flex-col items-center">
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <button
                    onClick={handleUploadClick}
                    className="w-14 h-14 bg-white rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <FaUpload className="text-xl text-gray-700" />
                  </button>
                  <span className="text-sm text-gray-600 mt-1">Upload</span>
                </div>

                {/* Link */}
                <div className="flex flex-col items-center">
                  <button
                    onClick={handleLinkClick}
                    className="w-14 h-14 bg-white rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <FaLink className="text-xl text-gray-700" />
                  </button>
                  <span className="text-sm text-gray-600 mt-1">Link</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default YourMaterials;
