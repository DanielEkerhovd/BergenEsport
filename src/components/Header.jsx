import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { to: "/community", label: "community" },
    { to: "/lag", label: "lag" },
    { to: "/oss", label: "om oss" },
    { to: "/sponsorer", label: "sponsorer" },
    { to: "/kontakt", label: "kontakt" },
  ];

  return (
    <header className="max-w-screen-xl w-full h-head z-50 absolute left-1/2 transform -translate-x-1/2">
      <div className="flex justify-between items-center h-full w-11/12 mx-auto">
        <NavLink to="/" className="size-14">
          <img className="size-full" src="/assets/logo.png" alt="logo" />
        </NavLink>
        <nav>
          {/* Desktop menu */}
          <ul className="hidden gap-10 uppercase text-white font-light md:flex">
            {menuItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  className="relative group px-3 py-2 overflow-hidden"
                  to={item.to}
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 left-[-20%] opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-200 ease-out"></span>
                  <span className="relative text-white group-hover:text-black transition-colors duration-200 ease-out">
                    {item.label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Phone menu */}
          <div className="relative w-full overflow-x-hidden md:hidden">
            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md"
            >
              <div className="space-y-1">
                <span
                  className={`block w-6 h-0.5 bg-white transition-transform ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-white transition-opacity ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-white transition-transform ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`fixed flex flex-col gap-5 right-0 left-0 top-0 h-screen bg-black shadow-md transition-all duration-300 ${
                menuOpen
                  ? "translate-y-0 pointer-events-auto"
                  : "-translate-y-[100%] pointer-events-none z-50"
              }`}
            >
              <div className="h-head w-11/12 flex items-center justify-between mx-auto">
                <NavLink to="/" className="size-14" onClick={() => setMenuOpen(false)}>
                  <img
                    className="size-full"
                    src="/assets/logo.png"
                    alt="logo"
                  />
                </NavLink>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 focus:outline-none focus:ring-2 rounded-md z-50"
                >
                  <div className="space-y-1">
                    <span
                      className={`block w-6 h-0.5 bg-white transition-transform ${
                        menuOpen ? "rotate-45 translate-y-2" : ""
                      }`}
                    ></span>
                    <span
                      className={`block w-6 h-0.5 bg-white transition-opacity ${
                        menuOpen ? "opacity-0" : "opacity-100"
                      }`}
                    ></span>
                    <span
                      className={`block w-6 h-0.5 bg-white transition-transform ${
                        menuOpen ? "-rotate-45 -translate-y-2" : ""
                      }`}
                    ></span>
                  </div>
                </button>
              </div>
              <ul className="flex flex-col justify-center gap-8 w-11/12 mx-auto grow mb-head">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.to}
                      className="relative block text-white text-3xl uppercase group p-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 left-[50%] opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-200 ease-out"></span>
                      <span className="relative group-hover:text-black transition-colors duration-200 ease-out">
                        {item.label}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
