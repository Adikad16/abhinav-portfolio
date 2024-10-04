import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  const handleClick = () => {
    alert("Connect with me to discuss Web Technologies, Blockchain, or Data Science!");
  };

  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
            // Trigger alert on click
            push: {
              particles_nb: 1,
              onclick: handleClick,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
