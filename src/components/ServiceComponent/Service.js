import { NavLink } from "react-router-dom";
import "./Service.css";

function Service() {
  return (
    <section className="services-page">
      <h2>Our Services</h2>

      <div className="service-detail">
        <h3>Packing Services</h3>
        <p>
          We use premium packing materials like bubble wrap, corrugated sheets,
          and wooden crates to ensure complete protection.
        </p>
        <NavLink to="/service/packing">View Packing</NavLink>
      </div>

      <div className="service-detail">
        <h3>Moving Services</h3>
        <p>
          Local and intercity relocation with well-maintained vehicles and
          professional drivers.
        </p>
        <NavLink to="/service/moving">View Moving</NavLink>
      </div>

      <div className="service-detail">
        <h3>Storage Services</h3>
        <p>
          Clean, secure warehouses with CCTV surveillance and flexible storage
          plans.
        </p>
        <NavLink to="/service/storage">View Storage</NavLink>
      </div>
    </section>
  );
}

export default Service;
