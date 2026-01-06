import axios from "axios";
import { __paymentapiurl } from "../../API_URL";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Charity.css";

function Charity() {
  const [amount, setamount] = useState(1000);
  const [email, setEmail] = useState(localStorage.getItem("email"));

  const navigate = useNavigate();

  const makeCharity = async () => {
    // ✅ VALIDATION
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Please enter a valid donation amount");
      return;
    }

    try {
      toast.info("Redirecting to secure payment...");
      const response = await axios.post(__paymentapiurl, {
        amount: amount,
        email: email
      });

      window.open(response.data.url);
    } catch (error) {
      toast.error("Payment failed. Please try again.");
    }
  };

  return (
    <div className="charity-page">
      <div className="charity-card">

        {/* HEADER */}
        <div className="charity-header">
          <h2>Support a Good Cause ❤️</h2>
          <p>
            Your donation helps people in need.  
            Every contribution matters.
          </p>
        </div>

        {/* AMOUNT INPUT */}
        <div className="charity-amount-section">
          <label>Donation Amount (₹)</label>

          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
          />

          {/* QUICK AMOUNT BUTTONS */}
          <div className="quick-amounts">
            <button onClick={() => setamount(500)}>₹500</button>
            <button onClick={() => setamount(1000)}>₹1000</button>
            <button onClick={() => setamount(2000)}>₹2000</button>
            <button onClick={() => setamount(5000)}>₹5000</button>
          </div>
        </div>

        {/* USER INFO */}
        <div className="charity-user">
          Donating as <strong>{email}</strong>
        </div>

        {/* PAY BUTTON */}
        <button className="pay-btn" onClick={makeCharity}>
          Proceed to Secure Payment
        </button>

        {/* FOOTER */}
        <div className="charity-footer">
          <p>🔒 Secure payment gateway</p>
          <p>🙏 Thank you for your generosity</p>
        </div>

      </div>
    </div>
  );
}

export default Charity;
