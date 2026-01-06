import { useState } from 'react';
import './ViewCharity.css';
import axios from 'axios';
import { __paymentdoneapiurl } from '../../API_URL';

function ViewCharity() {
  const [charity, setcharity] = useState([]);

  axios.get(__paymentdoneapiurl + "fetch")
    .then((response) => {
      setcharity(response.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="view-charity-page">
      <h2 className="page-title">View Charity Details</h2>

      <div className="charity-grid">
        {charity.map((row) => (
          <div className="charity-card" key={row._id}>
            <div className="charity-header">
              <span className="transaction-id">
                TXN #{row._id}
              </span>
            </div>

            <div className="charity-body">
              <p><strong>Email:</strong> {row.email}</p>
              <p><strong>Amount:</strong> ₹{row.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewCharity;
