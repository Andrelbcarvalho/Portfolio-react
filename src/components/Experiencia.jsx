// src/components/Experiencia.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const experiencias = [
  {
    empresa: "Prefeitura de Niterói",
    cargo: "Estagiário em Tecnologia",
    periodo: "2024 - 2025",
    descricao: [
      "Desenvolvimento de soluções com Python, JavaScript, HTML5, CSS3, PHP, React.js, Next.js e WordPress.",
      "Suporte à infraestrutura técnica: redes, proxies e serviços em nuvem (Azure, Microsoft 365 e Office 365).",
      "Uso de ferramentas de versionamento (Git, GitHub), containers (Docker) e dashboards (Power BI).",
      "Aplicação de frameworks e bibliotecas como Tailwind CSS, Bootstrap, Material UI e Vue.js.",
      "Implementação de práticas DevOps e automação com CI/CD para otimização de processos.",
    ],
  },
  {
    empresa: "E4 Serviços Terceirizados e Comércio EIRELI",
    cargo: "Assistente Administrativo",
    periodo: "05/2018 – 08/2021",
    descricao: [
      "Gestão administrativa e operacional do condomínio com liderança de equipe e apoio à síndica.",
      "Organização de documentos, contas, comunicados, contratos e atendimento a moradores",
      "Supervisão de serviços, manutenções, orçamentos, portaria e segurança",
      "Apoio em assembleias, relatórios mensais e fiscalização de normas internas.",
    ],
  },
  {
    empresa: "Ilha Pura Empreendimentos Imobiliários (Odebrecht)",
    cargo: "Assistente Administrativo",
    periodo: "03/2013 – 06/2016",
    descricao: [
      "Departamento Pessoal com liderança administrativa em contratos com mais de 3.000 colaboradores",
      "Responsável por admissões, demissões, controle de ponto, acessos, folha de pagamento e gestão de benefícios",
      "Gerenciamento de obrigações legais, convenções coletivas, auditorias, processos trabalhistas e relacionamento sindical",
      "Apoio à medicina e segurança do trabalho, organização documental e suporte ao projeto da Vila Olímpica",
    
    ],
  },
];

export default function Experiencia() {
  return (
    <section
      id="experiencia"
      style={{
        padding: "80px 20px 120px 20px", // mais espaço embaixo para a linha
        color: "#cdd9e5",
        maxWidth: "900px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.4 }}
        style={{
          fontSize: "2.5rem",
          color: "#39ff14",
          textShadow: "0 0 10px #39ff14",
          marginBottom: "60px",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        Experiência
      </motion.h2>

      {/* Linha vertical central */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "180px", // começa abaixo do título
          bottom: "180px", // termina antes do botão
          width: "4px",
          backgroundColor: "#39ff14",
          transform: "translateX(-50%)",
          borderRadius: "2px",
          zIndex: 0,
        }}
      ></div>

      {experiencias.map((exp, idx) => {
        const isLeft = idx % 2 === 0;

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            viewport={{ amount: 0.4 }}
            style={{
              position: "relative",
              width: "45%",
              marginBottom: "60px",
              left: isLeft ? 0 : "55%",
              textAlign: isLeft ? "right" : "left",
              paddingRight: isLeft ? "30px" : undefined,
              paddingLeft: isLeft ? undefined : "30px",
              zIndex: 1,
            }}
          >
            {/* Círculo na linha central */}
            <span
              style={{
                position: "absolute",
                top: "10px",
                left: isLeft ? "93%" : "-18px",
                width: "18px",
                height: "18px",
                backgroundColor: "#39ff14",
                borderRadius: "50%",
                border: "3px solid #111",
                transform: isLeft ? "translateX(50%)" : "translateX(-50%)",
                zIndex: 2,
              }}
            ></span>

            <h3 style={{ margin: "0 0 5px 0", fontSize: "1.5rem" }}>
              {exp.cargo}
            </h3>
            <h4
              style={{
                margin: "0 0 10px 0",
                fontWeight: "normal",
                fontStyle: "italic",
                color: "#7fff7f",
              }}
            >
              {exp.empresa} — {exp.periodo}
            </h4>

            <div>
              {exp.descricao.map((linha, i) => (
                <p
                  key={i}
                  style={{
                    margin: "0 0 6px 0",
                    lineHeight: 1.5,
                    whiteSpace: "normal", // permite quebrar linhas
                    overflowWrap: "break-word",
                  }}
                >
                  {linha}
                </p>
              ))}
            </div>
          </motion.div>
        );
      })}

      {/* Botão de Currículo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: experiencias.length * 0.3 }}
        viewport={{ amount: 0.4 }}
        style={{ textAlign: "center", marginTop: "40px", position: "relative", zIndex: 2 }}
      >
        <a
          href="/curriculo-andre.pdf"
          download
          style={{
            display: "inline-block",
            padding: "12px 30px",
            border: "2px solid #39ff14",
            borderRadius: "8px",
            color: "#39ff14",
            textDecoration: "none",
            fontWeight: "bold",
            textShadow: "0 0 5px #39ff14",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#39ff14";
            e.target.style.color = "#111";
            e.target.style.boxShadow = "0 0 15px #39ff14";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#39ff14";
            e.target.style.boxShadow = "none";
          }}
        >
          📄 Baixar Currículo
        </a>
      </motion.div>
    </section>
  );
}
