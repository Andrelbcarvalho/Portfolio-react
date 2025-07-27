import React, { useEffect, useRef } from "react";
import programadorImg from "../assets/programador-trabalhando-em-estilo-simples.PNG";
import Typewriter from "./Typewriter";
import "../components/Inicio.css";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Inicio() {
  const imgRef = useRef(null);
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(sectionRef, { margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [inView, controls]);

  useEffect(() => {
    const node = imgRef.current;
    const sectionNode = sectionRef.current;

    if (!node || !sectionNode) return;

    const resetAnimation = () => {
      node.classList.remove("imagem-animada");
      void node.offsetWidth;
      node.classList.add("imagem-animada");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            resetAnimation();
          }
        });
      },
      {
        threshold: 0.5,
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
          /* paddingRight removido para controle no CSS */
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: "12px",
          width: "100%",
        }}
      >
       <div
  style={{
    width: "100%",
    textAlign: "center",        // centraliza o texto dentro do container
    fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
    fontWeight: "bold",
    lineHeight: 1.3,
    marginBottom: "0.05em",
    wordBreak: "break-word",
    overflowWrap: "break-word",
    whiteSpace: "pre-wrap",     // permite quebra de linha e espaços
    display: "flex",            // usar flex pra centralizar vertical e horizontal
    justifyContent: "center",
  }}
>
  <Typewriter text={"Olá, sou\nAndré Carvalho"} />
</div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
            lineHeight: 1.4,
            margin: 0,
            whiteSpace: "normal",
          }}
        >
          Software Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            lineHeight: "1.6",
            margin: 0,
            whiteSpace: "normal",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          Bem-vindo ao meu portfólio! <br />
          Especialista em soluções web completas | Apaixonado por tecnologia
        </motion.p>
      </div>
    </section>
  );
}
