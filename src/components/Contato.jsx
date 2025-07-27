import React from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Contato() {
  const estiloContainer = {
    padding: "50px 20px",
    backgroundColor: "transparent",
    color: "#39ff14",
    textAlign: "center",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 50,
  };

  const estiloIconesContainer = {
  display: "flex",
  gap: 20,               // menor gap para caber mais no mobile
  justifyContent: "center",
  flexWrap: "wrap",      // permite quebrar para outra linha no mobile
};

const estiloItem = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  color: "#39ff14",
  textShadow: "0 0 10px #39ff14",
  fontSize: "clamp(1.8rem, 4vw, 2.5rem)", // responsivo
  textDecoration: "none",
  minWidth: 70,          // mínimo para ícone ficar bonitão, mas flexível
  padding: "0 10px",     // espaçamento horizontal
  transition: "transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease",
};

const estiloTexto = {
  marginTop: 8,
  fontSize: "clamp(0.8rem, 3vw, 1rem)", // texto responsivo
  fontWeight: "600",
  whiteSpace: "nowrap",                  // não quebrar texto (opcional)
};


  // Variants para animar cada ícone chegando de baixo com fade-in
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="contato" style={estiloContainer}>
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: 20,
          color: "#39ff14",
          textShadow: "0 0 10px #39ff14",
        }}
      >
        Contato
      </h2>
      <div style={estiloIconesContainer}>
        {[
          {
            href: "mailto:andrecarvalho@outlook.com.br",
            icon: <FaEnvelope />,
            label: "Email",
            title: "Enviar Email",
          },
          {
            href: "https://wa.me/5521993835466",
            icon: <FaWhatsapp />,
            label: "WhatsApp",
            title: "WhatsApp",
          },
          {
            href: "https://www.linkedin.com/in/andrelbretas/",
            icon: <FaLinkedin />,
            label: "LinkedIn",
            title: "LinkedIn",
          },
          {
            href: "https://github.com/Andrelbcarvalho",
            icon: <FaGithub />,
            label: "GitHub",
            title: "GitHub",
          },
        ].map((item, i) => (
          <motion.a
  key={item.label}
  href={item.href}
  target="_blank"
  rel="noopener noreferrer"
  className="contato-item"
  style={estiloItem}
  title={item.title}
  variants={itemVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
  custom={i}
  whileHover={{ scale: 1.2, color: "#39ff14", textShadow: "0 0 15px #39ff14" }} // verde neon aqui
>

            {item.icon}
            <span style={estiloTexto}>{item.label}</span>
          </motion.a>
        ))}
      </div>

      <style>{`
        .contato-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          color: #39ff14;
          text-shadow: 0 0 10px #39ff14;
          font-size: 2.5rem;
          text-decoration: none;
          width: 90px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
        }

        /* O hover é tratado no whileHover do motion, mas mantemos aqui por segurança */
      .contato-item:hover {
  color: #39ff14;
  transform: scale(1.2);
  text-shadow: 0 0 15px #39ff14;
  transition: transform 0.3s ease, color 0.3s ease;
        }
      `}</style>
    </section>
  );
}
