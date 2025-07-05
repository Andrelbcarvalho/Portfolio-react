import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiPython, SiPhp, SiVuedotjs, SiBootstrap,
  SiDocker, SiGit, SiGithub, SiWordpress, SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { FaNetworkWired, FaServer, FaShieldAlt } from "react-icons/fa";
import { MdWidgets, MdInsertChart } from "react-icons/md";
import { AiFillWindows } from "react-icons/ai";

const habilidades = [
  { nome: "HTML5", icone: <SiHtml5 color="#e34c26" /> },
  { nome: "CSS3", icone: <SiCss3 color="#264de4" /> },
  { nome: "JavaScript", icone: <SiJavascript color="#f0db4f" /> },
  { nome: "TypeScript", icone: <SiTypescript color="#007acc" /> },
  { nome: "React.js", icone: <SiReact color="#61dbfb" /> },
  { nome: "Next.js", icone: <SiNextdotjs color="#39ff14" /> }, // atualizado
  { nome: "Material UI", icone: <MdWidgets color="#007fff" /> },
  { nome: "Tailwind CSS", icone: <SiTailwindcss color="#38b2ac" /> },
  { nome: "Python", icone: <SiPython color="#3776ab" /> },
  { nome: "PHP", icone: <SiPhp color="#8892be" /> },
  { nome: "Vue.js", icone: <SiVuedotjs color="#42b883" /> },
  { nome: "Bootstrap", icone: <SiBootstrap color="#563d7c" /> },
  { nome: "Docker", icone: <SiDocker color="#0db7ed" /> },
  { nome: "Git", icone: <SiGit color="#f1502f" /> },
  { nome: "GitHub", icone: <SiGithub color="#fff" /> },
  { nome: "WordPress", icone: <SiWordpress color="#21759b" /> },
  { nome: "Power BI", icone: <MdInsertChart color="#f2c811" /> },
  { nome: "MySQL", icone: <SiMysql color="#00758f" /> },
  { nome: "SQL Server", icone: <SiPostgresql color="#336791" /> },
  { nome: "Microsoft Azure", icone: <AiFillWindows color="#0089d6" /> },
  { nome: "Microsoft 365", icone: <AiFillWindows color="#ea3e23" /> },
  { nome: "Redes", icone: <FaNetworkWired color="#00ffcc" /> },
  { nome: "Proxies", icone: <FaShieldAlt color="#6e56cf" /> },
  { nome: "IBM DataPower", icone: <FaServer color="#888" /> },
  { nome: "Office 365", icone: <AiFillWindows color="#ea3e23" /> },
];

export default function Habilidades() {
  return (
    <section
      id="habilidades"
      style={{
        padding: "80px 20px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5 }}
        style={{
          fontSize: "2.5rem",
          color: "#39ff14",
          textShadow: "0 0 10px #39ff14",
          marginBottom: "40px",
        }}
      >
        Habilidades
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "30px",
          justifyItems: "center",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {habilidades.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.06,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
            viewport={{ amount: 0.4 }}
            style={{
              color: "#cdd9e5",
              textAlign: "center",
              transition: "transform 0.3s ease",
              cursor: "default",
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
              {item.icone}
            </div>
            <span style={{ fontWeight: "600", fontSize: "1rem" }}>
              {item.nome}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
