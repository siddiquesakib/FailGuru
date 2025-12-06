import { Link, NavLink } from "react-router";
import MyNavLink from "./MyNavlink";

const Navbar = () => {
  const navlink = (
    <>
      <li>
        <MyNavLink to="/">Home</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/pets">Add Lesson</MyNavLink>
      </li>

      <li>
        <MyNavLink to="/add-listing">My Lessons</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/my-listings">Public Lessons</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/pricing">Pricing</MyNavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-[#f9f5f6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold"
            style={{ color: "#ffdb58" }}
          >
            Fail Guru
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-4 list-none">{navlink}</ul>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/auth/login"
              className="hidden md:inline-block px-4 py-2 text-sm font-semibold text-black  hover:text-gray-600  transition-colors"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="px-6 py-2.5 text-sm font-semibold text-black rounded transition-all relative"
              style={{
                backgroundColor: "#ffdb58",
                boxShadow: "4px 4px 0px 0px #000",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "2px 2px 0px 0px #000";
                e.currentTarget.style.transform = "translate(2px, 2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "4px 4px 0px 0px #000";
                e.currentTarget.style.transform = "translate(0, 0)";
              }}
            >
              Register
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
