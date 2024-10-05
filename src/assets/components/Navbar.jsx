import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <div className="bg-slate-950">
      <div className="flex justify-between items-center mx-16 mt-10  px-7 py-3 bg-slate-800 shadow-2xl shadow-slate-500/20 border-1 animate-gradient rounded-xl sticky top-0 z-50">

        <a href="#home" className="text-2xl font-bold text-white">
          Sudharsan V
        </a>

        <nav className="hidden md:flex gap-x-5 text-white">
          <a href="#home" className="hover:text-red-500">Home</a>
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#projects" className="hover:text-red-500">Projects</a>
          <a href="#contact" className="hover:text-red-500">Contact</a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden focus:outline-none text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {isOpen && (
          <nav className="absolute top-14 right-0 w-full bg-zinc-800 md:hidden text-white shadow-xl">
            <ul className="flex flex-col items-center gap-y-4 py-4">
              <li>
                <a
                  href="#home"
                  className="hover:text-red-500"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-red-500"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-red-500"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-red-500"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
