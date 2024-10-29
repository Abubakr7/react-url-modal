import React from "react";
import { closeModal } from "react-url-modal";

function EampleModal({ params, onClose }) {
  return (
    <div className="custom-modal">
      <h2>Modal Title</h2>
      <p>{params.userId}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default EampleModal;
