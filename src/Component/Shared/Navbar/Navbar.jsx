import { Link, NavLink } from "react-router";
import MyNavLink from "./MyNavlink";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const navlink = (
    <>
      <li>
        <MyNavLink to="/">Home</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/dashboard/add-lesson">Add Lesson</MyNavLink>
      </li>

      <li>
        <MyNavLink to="/dashboard/my-lesson">My Lessons</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/publiclessons">Public Lessons</MyNavLink>
      </li>
      <li>
        <MyNavLink to="/pricing">Pricing</MyNavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("You Logged Out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Fetch user data from MongoDB
  const { data: userData = null } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      if (!user?.email) return null;

      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/${user.email}`
      );
      return result.data;
    },
    enabled: !!user?.email,
  });

  // Check if user is premium
  const isPremiumUser =
    userData?.email === user?.email && userData?.isPremium === true;

  return (
    <nav className={`border-b border-gray-200 bg-[#f9f5f6]`}>
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
            {user ? (
              <div className="relative group ">
                {/* Avatar */}
                <div className="flex justify-center items-center gap-1.5">
                  {isPremiumUser ? (
                    <h1 className="font-semibold text-[#f0b127]">Premium ⭐</h1>
                  ) : (
                    <></>
                  )}
                  <button className="w-10 h-10 rounded-full border-2 border-[#ffbb24] overflow-hidden hover:border-purple-600 transition-all">
                    <img
                      src={user?.photoURL}
                      alt={user?.displayName}
                      className="w-full h-full object-cover"
                    />
                  </button>
                </div>
                {/* Dropdown Menu */}
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg border-3 border-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                  style={{ boxShadow: "4px 4px 0px 0px #000" }}
                >
                  <div className="py-2">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-purple-50 transition-colors"
                    >
                      📊 Dashboard
                    </Link>
                    <Link
                      to="/dashboard/profile"
                      className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-purple-50 transition-colors"
                    >
                      👤 Profile
                    </Link>
                    <Link
                      to="/dashboard/my-favorite"
                      className="block px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-purple-50 transition-colors"
                    >
                      🔖 My Favorite
                    </Link>
                    <button
                      onClick={handleLogOut}
                      className="w-full text-left px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
                    >
                      🚪 Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="hidden md:inline-block px-4 py-2 text-sm font-semibold text-black hover:text-gray-600 transition-colors"
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
              </>
            )}

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
