import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RightHamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // your routes as menu items
  const menuItems = [
    { name: "Shein 1", path: "/" },
    { name: "Shein 2", path: "/shein-2" },
    { name: "Shein 3", path: "/shein-3" },
    { name: "Slide 1", path: "/slide-1" },
    { name: "Slide 2", path: "/slide-2" },
    { name: "Slide 3", path: "/slide-3" },
    { name: "Slide 4", path: "/slide-4" },
    { name: "Slide 5", path: "/slide-5" },
    { name: "Slide 6", path: "/slide-6" },
    { name: "Slide 7", path: "/slide-7" },
  ];

  return (
    <div>
      {/* Floating Hamburger Icon */}
      <button
        className="fixed top-4 right-4 text-3xl text-white bg-gray-800 p-2 rounded-md z-30"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      {/* Overlay (click to close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white z-30 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        <ul className="flex flex-col items-center justify-center h-full gap-6 text-lg">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-gray-400 cursor-pointer">
              <Link to={item.path} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
