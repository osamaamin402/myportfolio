import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import JsonData from "./data/data.json";

export default function TokenModal({ show, onHide }) {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (token === JsonData.personal_info_token) {
      const limit = Number(JsonData.personal_info_token_limit ?? 0);
      const key = `personal_info_visits_${token}`;
      const current = Number(localStorage.getItem(key) || 0);
      if (limit > 0 && current >= limit && token === JsonData.personal_info_token) {
        setError("Token limit exceeded");
        return;
      }
      // increment visit count
      localStorage.setItem(key, String(current + 1));
      setError("");
      onHide();
      navigate("/personal_info");
      // trigger scroll handler in App to update active-link
      window.dispatchEvent(new Event('scroll'));
    } else {
      setError("Token is incorrect");
    }
  }

  return (
    <div className={`services__modal ${show ? "active-modal" : ""}`}>
      <div className="services__modal-content">
        <h4 className="services__modal-title">Enter Token</h4>
        <i className="uil uil-times services__modal-close" onClick={onHide}></i>
        <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
          <input className="contact__input"
            type="password"
            placeholder="Enter token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            style={{ border: "1px solid #6c6767", borderRadius: "4px", padding: "0.5rem", width: "100%", marginBottom: "0.5rem" }}
          />
          {error && <div style={{ color: "#e74c3c", marginBottom: "0.5rem" }}>{error}</div>}
          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
            <button type="button" className="button button--small" style={{backgroundColor:"#1232"}} onClick={onHide}>
              Close
            </button>
            <button type="submit" className="button button--small">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
