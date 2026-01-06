import './ManageUsers.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';
import { useNavigate } from 'react-router-dom';

function ManageUsers() {
  const navigate = useNavigate();
  const [users, setUserDetails] = useState([]);

  useEffect(() => {
    axios.get(__userapiurl + "fetch", {
      params: { role: "user" }
    })
      .then((result) => setUserDetails(result.data))
      .catch((error) => console.log(error));
  });

  const Changeuserstatus = (_id, s) => {
    if (s === "active") {
      axios.patch(__userapiurl + "update", {
        condition_obj: { _id },
        content_obj: { status: 1 }
      }).then(() => navigate("/manageusers"));
    }
    else if (s === "inactive") {
      axios.patch(__userapiurl + "update", {
        condition_obj: { _id },
        content_obj: { status: 0 }
      }).then(() => navigate("/manageusers"));
    }
    else {
      axios.delete(__userapiurl + "delete", {
        data: { _id }
      }).then(() => {
        alert("User Deleted Successfully");
        navigate("/manageusers");
      });
    }
  };

  return (
    <div className="manage-users-page">
      <h2 className="page-title">Manage Users</h2>

      <div className="users-grid">
        {users.map((row) => (
          <div className="user-card" key={row._id}>
            <div className="user-header">
              <h3>{row.name}</h3>
              <span className={`status ${row.status ? "active" : "inactive"}`}>
                {row.status ? "Active" : "Inactive"}
              </span>
            </div>

            <div className="user-body">
              <p><b>Email:</b> {row.email}</p>
              <p><b>Mobile:</b> {row.mobile}</p>
              <p><b>City:</b> {row.city}</p>
              <p><b>Gender:</b> {row.gender}</p>
              <p><b>Info:</b> {row.info}</p>
            </div>

            <div className="user-actions">
              {row.status ? (
                <button
                  className="btn blue"
                  onClick={() => Changeuserstatus(row._id, "inactive")}
                >
                  Deactivate
                </button>
              ) : (
                <button
                  className="btn green"
                  onClick={() => Changeuserstatus(row._id, "active")}
                >
                  Activate
                </button>
              )}

              <button
                className="btn red"
                onClick={() => Changeuserstatus(row._id, "delete")}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageUsers;
