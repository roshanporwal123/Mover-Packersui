import { NavLink } from "react-router-dom";
import "./UserHome.css";

function UserHome() {
  return (
    <section className="user-dashboard">
      <h2>Welcome to Your Dashboard</h2>

      <p>
        Manage your consignments, track shipments, and update your profile from
        one place.
      </p>

      <div className="dashboard-grid">
        <NavLink to="/addconsignment" className="dash-card">
          Add New Consignment
        </NavLink>

        <NavLink to="/track" className="dash-card">
          Track Consignment
        </NavLink>

        <NavLink to="/viewcategory" className="dash-card">
          Explore Services
        </NavLink>

        <NavLink to="/charity" className="dash-card">
          Charity Contributions
        </NavLink>
      </div>
    </section>
  );
}

export default UserHome;
