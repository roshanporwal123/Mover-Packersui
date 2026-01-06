import { NavLink } from "react-router-dom";
import "./AdminNav.css";

function AdminNav() {
  return (
    <div className="admin-nav-container">
      <div className="admin-nav">
        <NavLink to="/admin" className="admin-nav-link">
          Admin Home
        </NavLink>

        <NavLink to="/logout" className="admin-nav-link last">
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default AdminNav;
