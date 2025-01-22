import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="max-w-screen-xl w-11/12 mx-auto h-32 z-10 absolute left-1/2 transform -translate-x-1/2">
      <div className="flex justify-between items-center h-full">
        <NavLink to="/" className="size-14">
          <img className="size-full" src="/src/assets/logo.png" alt="logo" />
        </NavLink>
        <nav>
          <ul className="flex gap-10 uppercase text-white font-light">
            {[
              { to: "/community", label: "community" },
              { to: "/lag", label: "lag" },
              { to: "/oss", label: "om oss" },
              { to: "/sponsorer", label: "sponsorer" },
              { to: "/kontakt", label: "kontakt" },
            ].map((item) => (
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
        </nav>
      </div>
    </header>
  );
}
