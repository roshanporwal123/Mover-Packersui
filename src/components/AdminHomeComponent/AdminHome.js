import { NavLink } from "react-router-dom";
import "./AdminHome.css";

function AdminHome() {
  return (
    <section className="admin-dashboard">
      <h2>Admin Control Panel</h2>

      <p>
        Monitor platform activity, manage users, handle consignments, and
        control categories from here.
      </p>

      <div className="admin-grid">
        <NavLink to="/manageusers" className="admin-card">
          Manage Users
        </NavLink>

        <NavLink to="/manageorders" className="admin-card">
          Manage Orders
        </NavLink>

        <NavLink to="/addcategory" className="admin-card">
          Add Category
        </NavLink>

        <NavLink to="/addsubcategory" className="admin-card">
          Add Subcategory
        </NavLink>

        <NavLink to="/viewcharity" className="admin-card">
          View Charity Records
        </NavLink>
      </div>
    </section>
  );
}

export default AdminHome;
