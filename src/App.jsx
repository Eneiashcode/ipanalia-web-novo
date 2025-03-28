// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Devocional from "./pages/Devocional";
import Contribua from "./pages/Contribua";
import PG from "./pages/PG";
import Agenda from "./pages/Agenda";
import PedidoOracao from "./pages/PedidoOracao";
import Materiais from "./pages/Materiais";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/devocional" element={<Devocional />} />
      <Route path="/contribua" element={<Contribua />} />
      <Route path="/pg" element={<PG />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/pedido-oracao" element={<PedidoOracao />} />
      <Route path="/materiais" element={<Materiais />} />
    </Routes>
  );
}
