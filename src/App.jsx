import React from "react";
import FundoParticulas from "./components/FundoParticulas";
import Menu from "./components/Menu";
import Inicio from "./components/Inicio";
import Sobre from "./components/Sobre";
import Habilidades from "./components/Habilidades";
import Experiencia from "./components/Experiencia";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        position: "relative",  // importante para empilhar conteúdo acima do fundo
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#cdd9e5",
        fontFamily: "Arial, sans-serif",
        overflowX: "hidden",
        zIndex: 0,
      }}
    >
      <FundoParticulas />
      <div
        style={{
          position: "relative", // garante conteúdo acima do fundo
          zIndex: 1,
          padding: "20px",
        }}
      >
        <Menu />
        <Inicio />
        <Sobre />
        <Habilidades />
        <Experiencia />
        <Projetos />
        <Contato />
        <Footer />
      </div>
    </div>
  );
}
