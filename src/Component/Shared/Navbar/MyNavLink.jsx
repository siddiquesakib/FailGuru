import { NavLink } from "react-router";

export default function MyNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "px-1 py-2 text-[13px] font-semibold text-[#ad651c] transition-all"
          : "px-1 py-2 text-[13px] font-semibold text-black transition-all hover:text-gray-600"
      }
    >
      {children}
    </NavLink>
  );
}
