// src/pages/Agenda.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const agendaEventos = {
  "Abril 2025": [
    { data: "04/04", titulo: "Entre Elas", horario: "20h" },
    { data: "20/04", titulo: "Culto de Pascoa com Cantanta Infantil", horario: "18h" },
    { data: "27/04", titulo: "Culto com participação do Coral IP V.Mariana", horario: "18h" },
  ],
  "Maio 2025": [
    { data: "04/05", titulo: "Culto", horario: "18h" },
    { data: "11/05", titulo: "Culto", horario: "18h" },
    { data: "18/05", titulo: "Culto", horario: "18h" },
    { data: "25/05", titulo: "Culto", horario: "18h" },
  ],
};

export default function Agenda() {
  const [mesAberto, setMesAberto] = useState(null);

  const toggleMes = (mes) => {
    setMesAberto((prev) => (prev === mes ? null : mes));
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] p-4">
      <h2 className="text-xl font-bold text-[#002B5B] mb-4">🗓 Programção da Igreja</h2>

      {Object.entries(agendaEventos).map(([mes, eventos]) => (
        <div key={mes} className="mb-4 bg-white rounded-xl shadow-md">
          <button
            className="w-full text-left px-4 py-3 font-semibold text-[#002B5B] border-b border-gray-200 flex justify-between items-center hover:bg-[#e6f1f9] transition"
            onClick={() => toggleMes(mes)}
          >
            {mes}
            <span>{mesAberto === mes ? "▲" : "▼"}</span>
          </button>

          {mesAberto === mes && (
            <ul className="px-4 py-2 space-y-2">
              {eventos.map((evento, index) => (
                <li key={index} className="text-sm text-gray-700 border-b pb-2">
                  <strong>{evento.data}</strong> - {evento.titulo} <span className="text-xs text-gray-500">({evento.horario})</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="text-center mt-6">
        <Link to="/" className="text-sm text-[#014F86] underline hover:text-[#002B5B]">
          ← Voltar para o Início
        </Link>
      </div>
    </div>
  );
}
