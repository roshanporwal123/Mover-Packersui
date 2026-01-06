import React, { useState, useEffect } from "react";

function SimpleCaptcha({ onChange }) {
  const [captcha, setCaptcha] = useState("");
  const [input, setInput] = useState("");

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
    setInput("");
    onChange(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const verify = () => {
    if (input.toUpperCase() === captcha.toUpperCase()) {
      onChange(true);
    } else {
      onChange(false);
    }
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            letterSpacing: "5px",
            background: "#eee",
            padding: "10px",
            display: "inline-block",
            borderRadius: "5px",
            minWidth: "120px",
            textAlign: "center"
          }}
        >
          {captcha}
        </div>

        {/* Refresh Icon */}
        <span
          onClick={generateCaptcha}
          style={{
            cursor: "pointer",
            fontSize: "28px"
          }}
          title="Refresh Captcha"
        >
          🔄
        </span>
      </div>

      <br />

      <input
        type="text"
        placeholder="Enter CAPTCHA"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onBlur={verify}
      />
    </div>
  );
}

export default SimpleCaptcha;
