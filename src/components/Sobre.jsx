import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export default function Sobre() {
  return (
    <motion.section
      id="sobre"
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ amount: 0.4 }}
      style={{ padding: "120px 20px", textAlign: "center", color: "#cdd9e5" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.4 }}
        style={{
          fontSize: "2.8rem",
          color: "#39ff14",
          marginBottom: "30px",
          textShadow: "0 0 12px #39ff14",
        }}
      >
        Sobre mim
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2 }}
        viewport={{ amount: 0.4 }}
        style={{
          fontSize: "1.2rem",
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.8",
          textShadow: "0 0 6px rgba(0, 255, 150, 0.1)",
        }}
      >
        Profissional em início de carreira com sólida base em desenvolvimento web, análise de dados e suporte técnico, adquirida durante minha atuação na Prefeitura de Niterói.

Já trabalhei com tecnologias como React.js, Next.js, Python, Power BI, Docker, Azure, MySQL e SQL Server, aplicando essas ferramentas em projetos reais. Tenho familiaridade com frameworks como Tailwind, Bootstrap e Material UI, além de versionamento com Git e GitHub.

Busco uma oportunidade para seguir evoluindo na área, contribuindo com soluções modernas, responsivas e bem estruturadas, integrando front-end, back-end e infraestrutura.
      </motion.p>
    </motion.section>
  );
}
