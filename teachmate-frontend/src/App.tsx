// src/App.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
import LandingPage from './pages/LandingPage';
import NewChat from './pages/NewChat';
import YourMaterials from './pages/YourMaterials';
import YourStudent from './pages/YourStudent';
import Settings from './pages/Settings';

// Layout component with a header and footer.
const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with navigation links */}
      <header className="p-4 bg-gray-100 shadow">
        <nav className="flex justify-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-black">
            Landing
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-black">
            Login
          </Link>
          <Link to="/signup" className="text-gray-700 hover:text-black">
            Sign Up
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-black">
            About
          </Link>
          <Link to="/newchat" className="text-gray-700 hover:text-black">
            New Chat
          </Link>
          <Link to="/yourmaterials" className="text-gray-700 hover:text-black">
            Your Materials
          </Link>
          <Link to="/yourstudent" className="text-gray-700 hover:text-black">
            Your Student
          </Link>
          <Link to="/settings" className="text-gray-700 hover:text-black">
            Settings
          </Link>
        </nav>
      </header>

      {/* Main content is rendered here */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="p-4 bg-gray-100 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} TeachMate. All rights reserved.
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all routes in the Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="about" element={<About />} />
          <Route path="newchat" element={<NewChat />} />
          <Route path="yourmaterials" element={<YourMaterials />} />
          <Route path="yourstudent" element={<YourStudent />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
