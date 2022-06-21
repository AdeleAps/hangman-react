import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import React from "react";

const ParticlesComponent = () => {
  const particlesInit = async (main) => {
    await loadStarsPreset(main);
  };

  const options = {
    preset: "stars",
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    background: {
      image: "linear-gradient(rgb(4, 7, 39), rgb(11, 15, 59), rgb(25, 29, 80), rgb(38, 45, 156))", 
    },
    particles:
     {
      color: {
        value: ["rgb(238, 213, 146)", "rgb(238, 192, 67)", "rgb(247, 186, 21)"]
      },
      move: {
        enable: false
      },
      size: {
        value: {
          min: 1,
          max: 4
        }
      }

    }
  };
  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default React.memo(ParticlesComponent);
