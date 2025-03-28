// src/components/Card.jsx
import React from "react";

export default function Card({ icon, label }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-[#002B5B] font-semibold text-sm">{label}</p>
    </div>
  );
}
