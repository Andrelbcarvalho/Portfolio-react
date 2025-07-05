// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "0px 0px",
        textAlign: "center",
        backgroundColor: "transparent",
        color: "#39ff14",
        fontSize: "1rem",
 
        marginTop: "50px",
      }}
    >
      <p>
        © {new Date().getFullYear()} André Carvalho — Todos os direitos
        reservados.
      </p>
      <p style={{ fontSize: "0.9rem", color: "#a2a9b0", marginTop: "8px" }}>
        Desenvolvido com ❤️ em React.js
      </p>
    </footer>
  );
}
