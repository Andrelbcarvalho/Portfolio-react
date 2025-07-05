import React from "react";
import Avatar3D from "./Avatar3D";

export default function Inicio() {
  return (
    <section
      id="inicio"
      style={{
        padding: "100px 20px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        color: "#cdd9e5",
      }}
    >
      <div style={{ flex: "1 1 400px", maxWidth: "600px" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#39ff14", textShadow: "0 0 10px #39ff14" }}>
          Olá, eu sou André
        </h1>
        <h2 style={{ fontSize: "1.5rem", marginTop: "10px", color: "#6e56cf" }}>
          Desenvolvedor Full Stack
        </h2>
        <p style={{ fontSize: "1.1rem", marginTop: "20px", lineHeight: "1.6" }}>
          Crio sites e aplicações web modernos com React, animações fluidas e design responsivo.<br />
          Especialista em soluções web completas | Apaixonado por tecnologia.
        </p>
        <a
          href="#projetos"
          style={{
            display: "inline-block",
            marginTop: "30px",
            backgroundColor: "#39ff14",
            color: "#111",
            fontWeight: "bold",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            boxShadow: "0 0 10px #39ff14",
            transition: "0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#6e56cf";
            e.target.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#39ff14";
            e.target.style.color = "#111";
          }}
        >
          Ver Projetos
        </a>
      </div>

      <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
        <Avatar3D />
      </div>
    </section>
  );
}
