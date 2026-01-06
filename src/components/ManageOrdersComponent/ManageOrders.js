import './ManageOrders.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __consignmentapiurl } from '../../API_URL';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ManageOrders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [descriptions, setDescriptions] = useState({});

  useEffect(() => {
    axios
      .get(__consignmentapiurl + "fetch")
      .then((result) => setOrders(result.data))
      .catch(() => toast.error("Failed to fetch orders"));
  });

  const Changeorderstatus = (_id, action) => {
    if (action === "approve") {
      axios.patch(__consignmentapiurl + "update", {
        condition_obj: { _id },
        content_obj: { status: 1 }
      }).then(() => {
        toast.success("Order Approved");
        navigate("/manageorders");
      });
    }

    if (action === "disapprove") {
      axios.patch(__consignmentapiurl + "update", {
        condition_obj: { _id },
        content_obj: { status: 0 }
      }).then(() => {
        toast.warning("Order Disapproved");
        navigate("/manageorders");
      });
    }

    if (action === "delete") {
      axios.delete(__consignmentapiurl + "delete", {
        data: { _id }
      }).then(() => {
        toast.success("Order Deleted Successfully");
        navigate("/manageorders");
      });
    }
  };

  const HandleSubmit = (orderId, orderTrack) => {
    const trackingDescription = descriptions[orderId];

    if (!trackingDescription || trackingDescription.trim() === "") {
      toast.error("Please enter tracking description");
      return;
    }

    axios.patch(__consignmentapiurl + "update", {
      condition_obj: { _id: orderId },
      content_obj: { track: orderTrack + "," + trackingDescription }
    })
    .then(() => {
      toast.success("Tracking status saved successfully");
      setDescriptions((prev) => ({
        ...prev,
        [orderId]: ""
      }));
    })
    .catch(() => toast.error("Failed to save tracking status"));
  };

  return (
    <div className="admin-orders-page">
      <h2 className="page-title">Manage Orders</h2>

      <div className="orders-grid">
        {orders.map((order) => (
          <div className="order-card" key={order._id}>

            {/* COLUMN 1 + 2 (KEEPED TOGETHER FOR STATE SYNC) */}
            <div className="order-header">
              <span className="order-id">#{order._id}</span>
              <span className={`status ${order.status ? "approved" : "pending"}`}>
                {order.status ? "Approved" : "Pending"}
              </span>
            </div>

            {/* COLUMN 3 */}
            <div className="order-body">
              <p><strong>Email:</strong> {order.email}</p>
              <p><strong>Category:</strong> {order.category}</p>
              <p><strong>Subcategory:</strong> {order.subcategory}</p>
              <p><strong>Pickup:</strong> {order.pickup_location}</p>
              <p><strong>Drop:</strong> {order.destination}</p>
              <p className="desc">
                <strong>Description:</strong> {order.descrition}
              </p>
            </div>

            {/* COLUMN 4 */}
            <div className="order-action-buttons">
              {order.status ? (
                <button
                  className="btn warning"
                  onClick={() => Changeorderstatus(order._id, "disapprove")}
                >
                  Disapprove
                </button>
              ) : (
                <button
                  className="btn success"
                  onClick={() => Changeorderstatus(order._id, "approve")}
                >
                  Approve
                </button>
              )}

              <button
                className="btn danger"
                onClick={() => Changeorderstatus(order._id, "delete")}
              >
                Delete
              </button>
            </div>

            {/* COLUMN 5 */}
            <div className="order-tracking">
              <label>Update Tracking Status</label>

              <textarea
                placeholder="Describe about tracking status"
                value={descriptions[order._id] || ""}
                onChange={(e) =>
                  setDescriptions((prev) => ({
                    ...prev,
                    [order._id]: e.target.value
                  }))
                }
                rows="4"
              />

              <button
                className="btn primary"
                onClick={() => HandleSubmit(order._id, order.track)}
              >
                Update
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageOrders;
