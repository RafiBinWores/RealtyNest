import { useState } from "react";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <header className="relative pt-5 lg:pt-10">
      <nav className="flex items-center justify-between px-3">
        <div className="flex items-center gap-16 font-medium">
          <a href="/">
            <img
              className="w-36 md:w-[200px]"
              src="/image/logo1.png"
              alt="Logo"
            />
          </a>
          <div className="items-center hidden gap-16 lg:flex">
            <a
              className="text-gray-700 duration-300 hover:text-gray-900 hover:scale-110"
              href=""
            >
              Home
            </a>
            <a
              className="text-gray-700 duration-300 hover:text-gray-900 hover:scale-110"
              href=""
            >
              About
            </a>
            <a
              className="text-gray-700 duration-300 hover:text-gray-900 hover:scale-110"
              href=""
            >
              Contact
            </a>
            <a
              className="text-gray-700 duration-300 hover:text-gray-900 hover:scale-110"
              href=""
            >
              Agents
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 font-medium lg:gap-8">

          {/* Sign in, Sign up button */}
          <a
            className="px-4 py-2 text-gray-800 duration-200 border-2 border-blue-600 -z-10 lg:py-3 rounded-xl hover:bg-blue-700 hover:text-white"
            href=""
          >
            Sign in
          </a>
          <a
            className="hidden px-4 py-3 text-white duration-200 bg-blue-600 rounded-xl hover:bg-blue-700 lg:block"
            href=""
          >
            Sign up
          </a>

          {/* profile avatar */}
          <a href="">
            <img
              className="hidden w-10 h-10 rounded-full"
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="Rounded avatar"
            />
          </a>

          <div className="lg:hidden">
            
            {/* Hamburger Icon */}
            <svg
              onClick={() => setToggleNav(!toggleNav)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="z-10 bg-white rounded size-6 md:size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            {/* Mobile nav */}
            <div
              className={`absolute top-0 pt-20 flex flex-col items-center h-screen gap-16 bg-black -z-10 lg:hidden duration-300 transition-all ${
                toggleNav ? "right-0 w-2/4" : "-right-2/4"
              }`}
            >
              <a
                className="text-white duration-300 hover:text-gray-900 hover:scale-110"
                href=""
              >
                Home
              </a>
              <a
                className="text-white duration-300 hover:text-gray-900 hover:scale-110"
                href=""
              >
                About
              </a>
              <a
                className="text-white duration-300 hover:text-gray-900 hover:scale-110"
                href=""
              >
                Contact
              </a>
              <a
                className="text-white duration-300 hover:text-gray-900 hover:scale-110"
                href=""
              >
                Agents
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
