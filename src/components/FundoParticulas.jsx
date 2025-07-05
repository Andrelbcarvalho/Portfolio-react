import React from "react";
import Particles from "react-tsparticles";

export default function FundoParticulas() {
  return (
    <Particles
      id="tsparticles"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
      options={{
        background: { color: "#000" },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 150, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#00ffff" },
          links: {
            color: "#00ffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: { enable: false },
          move: {
            enable: true,   // precisa estar true para mover
            speed: 2,       // velocidade das partículas
            direction: "none",
            outModes: "bounce",
            random: false,
            straight: false,
          },
          number: {
            value: 80,      // mais partículas para melhor efeito
            density: { enable: true, area: 800 },
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}
