"use client";

import { useTheme } from "next-themes";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";

const ParticlesBackground = () => {
  const { theme } = useTheme();

  const setBackground = () => {
    if (theme === "dark") return "#1c1917";
    return "#ffffff";
  };
  const setParticle = () => {
    if (theme === "dark") return "#ffffff";
    return "#1c1917";
  };
  const customInit = async (engine: Engine) => {
    await loadLinksPreset(engine);
  };
  return (
    <Particles
      options={{
        preset: "links",
        background: {
          color: {
            value: setBackground(),
          },
        },
        particles: {
          color: {
            value: setParticle(),
          },
          links: {
            color: "#16BC25",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
        },
      }}
      init={customInit}
      className="-z-50"
    />
  );
};

export default ParticlesBackground;
