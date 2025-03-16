// src/pages/NewChat.tsx
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaPaperPlane,
  FaUpload,
  FaCommentDots,
  FaFolderOpen,
  FaUserFriends,
  FaCog,
} from "react-icons/fa";

type SidebarButtonProps = {
  label: string;
  icon: React.ReactElement;
  active?: boolean;
  to: string;
};

const SidebarButton: React.FC<SidebarButtonProps> = ({
  label,
  icon,
  active,
  to,
}) => (
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

const NewChat: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [prompt, setPrompt] = useState<string>("");

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmitPrompt = () => {
    if (prompt.trim() !== "") {
      console.log("Submitted prompt:", prompt);
      // Process the prompt as needed, then clear it:
      setPrompt("");
    }
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
          <SidebarButton
            label="New chat"
            icon={<FaCommentDots />}
            active
            to="/newchat"
          />
          <SidebarButton
            label="Your Materials"
            icon={<FaFolderOpen />}
            to="/yourmaterials"
          />
          <SidebarButton
            label="Your Students"
            icon={<FaUserFriends />}
            to="/yourstudent"
          />
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
        <main className="flex-1 px-6 py-6 flex flex-col items-center justify-center">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-black mb-8">
            Your Assistant In Education
          </h2>

          {/* Prompt Input + Upload Button */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Prompt Box with Red Border & Send Icon as Button */}
            <div className="flex items-center border-2 border-red-500 rounded-full px-4 py-2 text-red-500 w-full max-w-md">
              <input
                type="text"
                placeholder="Type prompt..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1 outline-none bg-transparent text-black placeholder:text-gray-500"
              />
              <button onClick={handleSubmitPrompt} className="ml-2">
                <FaPaperPlane className="cursor-pointer" />
              </button>
            </div>

            {/* Upload Button with Upload Icon */}
            <div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    console.log("Selected file:", e.target.files[0].name);
                  }
                }}
              />
              <button
                onClick={handleUploadClick}
                className="flex items-center gap-2 bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition"
              >
                <FaUpload />
                <span>Upload File</span>
              </button>
            </div>
          </div>

          {/* Chips */}
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "Performance analytics",
              "Latest material",
              "Recommendations",
              "More",
            ].map((label) => (
              <button
                key={label}
                className="px-4 py-2 border border-gray-300 rounded-full text-sm text-black hover:bg-gray-100 transition"
              >
                {label}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewChat;
