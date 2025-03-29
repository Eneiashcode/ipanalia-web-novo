// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import logo from "../assets/logo.png";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [quantidadePedidos, setQuantidadePedidos] = useState(0);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  useEffect(() => {
    const pedidos = JSON.parse(localStorage.getItem("pedidosOracao")) || [];
    setQuantidadePedidos(pedidos.length);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-gray-800 font-sans">
      {/* Cabeçalho */}
      <header className="bg-[#002B5B] text-white shadow-md px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <div>
            <h1 className="text-lg font-bold">Igreja Presbiteriana</h1>
            <p className="text-sm text-gray-300">Anália</p>
          </div>
        </div>
        <button onClick={toggleMenu}>
          <Menu className="w-6 h-6 text-white" />
        </button>
      </header>

      {/* Menu lateral */}
      {menuAberto && (
        <div className="absolute top-0 left-0 w-3/4 h-full bg-white shadow-lg z-20 p-4">
          <ul className="space-y-4">
            <li className="font-semibold text-[#002B5B] border-b pb-2 cursor-pointer">
              <Link to="/">Página Inicial</Link>
            </li>
            <li className="font-semibold text-[#002B5B] border-b pb-2 cursor-pointer">
              <Link to="/devocional">Devocionais</Link>
            </li>
            <li className="font-semibold text-[#002B5B] border-b pb-2 cursor-pointer">
              <Link to="/agenda">Agenda</Link>
            </li>
            <li className="font-semibold text-[#002B5B] border-b pb-2 cursor-pointer">
              <Link to="/pg">Pequenos Grupos</Link>
            </li>
            <li className="font-semibold text-[#002B5B] border-b pb-2 cursor-pointer">
              <Link to="/pedido-oracao">Fazer Pedido de Oração</Link>
            </li>
            <li className="font-semibold text-[#002B5B] border-b pb-2 cursor-pointer relative">
              <Link to="/pedidos-recebidos">
                Pedidos Recebidos
                {quantidadePedidos > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                    {quantidadePedidos}
                  </span>
                )}
              </Link>
            </li>
            <li className="font-semibold text-[#002B5B] border-b pb-2 cursor-pointer">
              <Link to="/materiais">Materiais</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Destaque de cultos presenciais + Instagram */}
      <section className="bg-[#014F86] text-white text-center py-6 px-4 mt-4 rounded-xl mx-4 shadow-md">
        <h2 className="text-xl font-bold mb-1">️Cultos aos Domingos</h2>
        <p className="text-sm mb-1">⏰ 10h30 da manhã</p>
        <p className="text-sm mb-3">⏰ 18h à noite</p>
        <div className="flex justify-center items-center gap-2 text-sm text-white/90">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
          </svg>
          <span>Siga-nos no Instagram: <a href="https://www.instagram.com/ip.analia" target="_blank" rel="noreferrer" className="underline hover:text-white">@ip.analia</a></span>
        </div>
      </section>

      {/* Espaço extra entre o banner e o carrossel */}
      <div className="h-4" />

      {/* Carrossel */}
      <Carousel />

      {/* Grid de Cards */}
      <div className="grid grid-cols-2 gap-4 p-4 mt-4">
        <Link to="/devocional">
          <Card icon="📖" label="Devocional Diário" />
        </Link>
        <Link to="/contribua">
          <Card icon="💚" label="Contribua" />
        </Link>
        <Link to="/pg">
          <Card icon="👥" label="Pequenos Grupos" />
        </Link>
        <Link to="/agenda">
          <Card icon="🗓" label="Agenda da Igreja" />
        </Link>
        <Link to="/pedido-oracao">
          <Card icon="🙏" label="Pedido de Oração" />
        </Link>
        <Link to="/materiais">
          <Card icon="📄" label="Materiais para Download" />
        </Link>
      </div>

      {/* Rodapé */}
      <footer className="bg-[#002B5B] text-[#f0f4f8] text-sm text-center py-6 mt-6 px-4">
        <p className="mb-2 font-semibold">@ip.analia</p>
        <p className="mb-1">Rua Acurui, 327</p>
        <p className="mb-3">Igreja Presbiteriana Anália Franco</p>
        <div className="flex justify-center gap-4 mb-2">
          <a
            href="https://www.instagram.com/ip.analia"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            title="Instagram"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
            </svg>
          </a>
        </div>
        <p className="text-xs text-[#f0f4f8]/70">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
