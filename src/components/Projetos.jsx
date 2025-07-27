import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const projetos = [
  {
    titulo: "Projeto 1",
    descricao: "Aplicação incrível feita com React e Vite.",
    imagem: "https://picsum.photos/id/1011/400/200",
    link: "https://github.com/seuusuario/projeto1",
  },
  {
    titulo: "Projeto 2",
    descricao: "Projeto focado em UI/UX com Tailwind CSS.",
    imagem: "https://picsum.photos/id/1015/400/200",
    link: "https://github.com/seuusuario/projeto2",
  },
  {
    titulo: "Projeto 3",
    descricao: "App fullstack moderno com Node.js e React.",
    imagem: "https://picsum.photos/id/1019/400/200",
    link: "https://github.com/seuusuario/projeto3",
  },
  {
    titulo: "Projeto 4",
    descricao: "Projeto experimental com Docker e Kubernetes.",
    imagem: "https://picsum.photos/id/1025/400/200",
    link: "https://github.com/seuusuario/projeto4",
  },
];

export default function Projetos() {
  return (
    <section
      id="projetos"
      style={{
        padding: "60px 20px",
        backgroundColor: "transparent",
        color: "#cdd9e5",
      }}
    >
      <h2
        style={{
          color: "#39ff14",
          textShadow: "0 0 10px #39ff14",
          fontSize: "2.5rem",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        Projetos
      </h2>

      <div
        style={{
          overflowX: "auto",
          paddingTop: "30px",
          paddingBottom: "20px",
          paddingLeft: "20px",
          paddingRight: "40px",
        }}
      >
        <div
          className="scroll-container"
          style={{
            display: "flex",
            gap: "20px",
            maxWidth: "2000px",
            margin: "0 auto",
            justifyContent: "flex-start",
          }}
        >
          {projetos.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 1.2,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              style={{ flexShrink: 0 }}
            >
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="notebook"
              >
                <div className="notebook-screen">
                  <div className="webcam"></div>
                  <img
                    src={proj.imagem}
                    alt={`Imagem do projeto ${proj.titulo}`}
                    loading="lazy"
                  />
                </div>

                <div className="notebook-base">
                  {[...Array(12)].map((_, idx) => (
                    <div key={idx} className="key" />
                  ))}
                </div>

                <div className="notebook-info">
                  <h3>{proj.titulo}</h3>
                  <p>{proj.descricao}</p>
                  <span>Ver projeto &rarr;</span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
        .scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .notebook {
          min-width: 280px;
          max-width: 320px;
          background-color: #111;
          border-radius: 16px;
          box-shadow: 0 12px 35px #39ff1466;
          border: 3px solid #39ff14;
          color: #cdd9e5;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          position: relative;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          will-change: transform;
        }

        .notebook:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 50px #6e56cfdd;
          border-color: #6e56cf;
        }

        .notebook-screen {
          position: relative;
          background: #0a0a0a;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          padding: 12px;
          box-shadow: inset 0 0 8px #000;
          overflow: hidden;
        }

        .webcam {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 10px;
          height: 10px;
          background: #444;
          border-radius: 50%;
          opacity: 0.6;
          box-shadow: 0 0 5px #222;
          z-index: 10;
        }

        .notebook-screen img {
          width: 100%;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          border-radius: 6px;
          box-shadow: 0 0 5px #000;
          opacity: 1;
          display: block;
        }

        .notebook-base {
          background: #222;
          display: flex;
          justify-content: center;
          gap: 6px;
          padding: 14px 20px;
          border-radius: 0 0 12px 12px;
          box-shadow: inset 0 2px 8px #000;
        }

        .key {
          width: 18px;
          height: 12px;
          background: #333;
          border-radius: 3px;
          box-shadow: inset 0 2px 5px #111;
          transition: background-color 0.3s ease;
        }

        .key:hover {
          background-color: #39ff14;
          box-shadow: 0 0 6px #39ff14;
        }

        .notebook-info {
          padding: 16px 20px;
          color: #cdd9e5;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .notebook-info h3 {
          font-size: 1.5rem;
          color: #39ff14;
          margin: 0;
        }

        .notebook-info p {
          font-size: 1rem;
          line-height: 1.4;
          margin: 0;
          color: #a2a9b0;
          flex-grow: 1;
        }

        .notebook-info span {
          font-weight: 700;
          color: #6e56cf;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .scroll-container {
            gap: 12px;
            padding: 0 20px;
          }
          .notebook {
            min-width: 240px;
            max-width: 280px;
          }
        }

        @media (max-width: 600px) {
          .scroll-container {
            gap: 10px;
            padding: 0 10px;
            justify-content: center;
          }
          .notebook {
            min-width: 90vw;
            max-width: 90vw;
          }
        }
      `}</style>
    </section>
  );
}
