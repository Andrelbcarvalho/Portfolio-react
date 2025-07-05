import React, { useState, useEffect } from "react";

export default function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [largura, setLargura] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setLargura(window.innerWidth);
      if (window.innerWidth > 768) {
        setMenuAberto(false); // Fecha o menu ao redimensionar
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const estiloMenuBase = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#161b22",
    padding: "8px 0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.7)",
    zIndex: 100,
    display: "flex",
    justifyContent: largura > 768 ? "center" : "space-between",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
  };

  const estiloLink = {
    color: "#39ff14",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.1rem",
    cursor: "pointer",
    margin: "10px 20px",
    transition: "transform 0.3s ease, text-shadow 0.3s ease",
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuAberto(false); // Fecha o menu no mobile
    }
  };

  const itens = [
    { id: "inicio", label: "Início" },
    { id: "sobre", label: "Sobre" },
    { id: "habilidades", label: "Habilidades" },
    { id: "projetos", label: "Projetos" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <nav style={estiloMenuBase}>
      {largura <= 768 ? (
        <>
          {/* Botão hamburguer mobile */}
          <div
            onClick={() => setMenuAberto(!menuAberto)}
            style={{
              fontSize: "1.8rem",
              color: "#39ff14",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            ☰
          </div>

          {/* Menu dropdown no mobile */}
          {menuAberto && (
            <div
              style={{
                position: "absolute",
                top: "60px",
                left: 0,
                width: "100%",
                backgroundColor: "#161b22",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingBottom: "20px",
              }}
            >
              {itens.map((item) => (
                <a
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  style={estiloLink}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.2)";
                    e.target.style.textShadow = "0 0 10px #39ff14";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.textShadow = "none";
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </>
      ) : (
        itens.map((item) => (
          <a
            key={item.id}
            onClick={() => handleScroll(item.id)}
            style={estiloLink}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.2)";
              e.target.style.textShadow = "0 0 10px #39ff14";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.textShadow = "none";
            }}
          >
            {item.label}
          </a>
        ))
      )}
    </nav>
  );
}
