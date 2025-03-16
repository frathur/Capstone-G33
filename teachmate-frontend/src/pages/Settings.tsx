// src/pages/Settings.tsx

import React, { useState } from "react";
import {
  FaUserCircle,
  FaCommentDots,
  FaFolderOpen,
  FaUserFriends,
  FaCog,
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

// A simple toggle switch component
type ToggleSwitchProps = {
  label: string;
  defaultChecked?: boolean;
};
const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, defaultChecked }) => {
  const [checked, setChecked] = useState<boolean>(!!defaultChecked);

  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-gray-800">{label}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-400 rounded-full peer peer-checked:bg-red-500 transition-colors" />
        <span className="ml-2 text-sm text-gray-600">
          {checked ? "On" : "Off"}
        </span>
      </label>
    </div>
  );
};

const Settings: React.FC = () => {
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
          <SidebarButton label="Your Students" icon={<FaUserFriends />} />
          <SidebarButton label="Settings" icon={<FaCog />} active />
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
            <NavButton label="How it works" />
            <NavButton label="Interface" />
          </nav>
          {/* Right: User Icon */}
          <div className="w-1/3 flex justify-end">
            <FaUserCircle className="text-2xl text-gray-600 cursor-pointer" />
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 flex flex-col items-center justify-start">
          {/* Container/Card for Settings */}
          <div className="w-full max-w-2xl bg-[#F9F9F9] rounded-lg shadow p-6">
            {/* Profile Section */}
            <h2 className="text-xl font-bold mb-4 text-black">Profile</h2>

            {/* 'Change me' link */}
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
              <button className="text-red-500 font-semibold hover:underline">
                Change me
              </button>
            </div>

            {/* Account settings */}
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-700">Account settings</h3>
              <p className="text-sm text-gray-600">
                Change your password and security options, and access other Google services.{" "}
                <a href="#" className="text-red-500 hover:underline">
                  Manage
                </a>
              </p>
            </div>

            {/* Change name */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-gray-700">Change name</h3>
              <p className="text-sm text-gray-600">
                To change your name, go to your{" "}
                <a href="#" className="text-red-500 hover:underline">
                  account settings
                </a>.
              </p>
            </div>

            {/* Notification Section */}
            <h2 className="text-xl font-bold mb-4 text-black">Notification</h2>
            <p className="text-sm text-gray-600 mb-4">
              These settings apply to the notifications you get by email.{" "}
              <a href="#" className="text-red-500 hover:underline">
                Learn more
              </a>
            </p>

            {/* Class notifications */}
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-700">Class notifications</h3>
              <a href="#" className="text-sm text-red-500 hover:underline">
                Collapse
              </a>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              These settings apply to both your email and device notifications for each class.
            </p>

            {/* Toggles for classes */}
            <ToggleSwitch label="Computer Science 3" />
            <ToggleSwitch label="Biological Science 2" />
            <ToggleSwitch label="Electrical Engineering" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
