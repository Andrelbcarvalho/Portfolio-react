import React, { useEffect, useRef } from "react";
import programadorImg from "../assets/programador-trabalhando-em-estilo-simples.PNG";
import Typewriter from "./Typewriter";
import "../components/Inicio.css";

export default function Inicio() {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = imgRef.current;
    const sectionNode = sectionRef.current;

    if (!node || !sectionNode) return;

    // Função para reiniciar animação removendo e adicionando a classe
    const resetAnimation = () => {
      node.classList.remove("imagem-animada");
      // Força reflow para reiniciar animação
      void node.offsetWidth;
      node.classList.add("imagem-animada");
    };

    // Cria observer para detectar quando a seção está visível na tela
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            resetAnimation();
          }
        });
      },
      {
        threshold: 0.5, // Pode ajustar esse valor para mais ou menos visibilidade
      }
    );

    observer.observe(sectionNode);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      style={{
        padding: "100px 20px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "60px",
        color: "#cdd9e5",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Imagem à esquerda */}
      <div
        style={{
          flex: "1 1 400px",
          maxWidth: "450px",
        }}
      >
        <img
          ref={imgRef}
          src={programadorImg}
          alt="Programador trabalhando"
          className="imagem-animada"
          style={{
            width: "100%",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Texto à direita */}
      <div
        style={{
          flex: "1 1 400px",
          maxWidth: "450px",
          paddingRight: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: "10px",
        }}
      >
        <Typewriter text="Olá, sou André Carvalho, Desenvolvedor Full Stack" />
        <h2 style={{ fontSize: "1.5rem", margin: 0 }}>Software Developer</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6", margin: 0 }}>
          Bem-vindo ao meu portfólio! <br />
          Especialista em soluções web completas | Apaixonado por tecnologia
        </p>
      </div>
    </section>
  );
}
