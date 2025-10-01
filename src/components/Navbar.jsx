import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">Dashboard</h1>
      <div className="space-x-4">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-white"
              : "text-gray-200 hover:text-white"
          }
        >
          Profile
        </NavLink>

        <NavLink
          to="/topics"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-white"
              : "text-gray-200 hover:text-white"
          }
        >
          Topics
        </NavLink>

        <NavLink
          to="/progress"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-white"
              : "text-gray-200 hover:text-white"
          }
        >
          Progress
        </NavLink>

        <button
          onClick={handleLogout}
          className="bg-blue-800 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
