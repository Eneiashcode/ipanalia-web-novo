// src/pages/PedidosRecebidos.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PedidosRecebidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const pedidosSalvos = JSON.parse(localStorage.getItem("pedidosOracao")) || [];
    setPedidos(pedidosSalvos.reverse()); // mais recentes primeiro
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-gray-800 font-sans p-6">
      <h1 className="text-2xl font-bold text-[#002B5B] mb-4 text-center">
        Pedidos de Oração Recebidos 🙏
      </h1>

      {pedidos.length === 0 ? (
        <p className="text-center text-sm text-gray-500">
          Nenhum pedido de oração recebido ainda.
        </p>
      ) : (
        <ul className="space-y-4">
          {pedidos.map((pedido, index) => (
            <li
              key={index}
              className="bg-white rounded-xl shadow-md p-4 text-sm text-gray-700"
            >
              <p className="mb-2">
                <strong>{pedido.nome || "Anônimo"}</strong> -{" "}
                <span className="text-xs text-gray-500">{pedido.data}</span>
              </p>
              <p className="text-gray-800">{pedido.texto}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="text-center mt-6">
        <Link to="/" className="text-sm text-[#014F86] underline hover:text-[#002B5B]">
          ← Voltar para o Início
        </Link>
      </div>
    </div>
  );
}
