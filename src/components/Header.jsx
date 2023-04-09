import { BoltIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-[#f3f4f6]">
      <Link to="/" className="flex items-center gap-x-1">
        <BoltIcon className="h-6 w-6 text-blue-500" />
        <p className="font-bold text-lg text-[#1F2937]">nextPage</p>
      </Link>
      <ol className="flex items-center gap-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 text-base font-medium"
              : "text-base font-medium text-[#374151]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 text-base font-medium"
              : "text-base font-medium text-[#374151]"
          }
        >
          Books
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 text-base font-medium"
              : "text-base font-medium text-[#374151]"
          }
        >
          About us
        </NavLink>
      </ol>
    </div>
  );
};

export default Header;
