export const particlesConfig = {
  light: {
    fpsLimit: 60,
    particles: {
      number: {
        value: 170,
        density: {
          enable: true,
        },
      },
      color: {
        value: "#2A2F41",
      },
      opacity: {
        value: 0.8,
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        speed: 1.4,
        // direction: "top",
        // out_mode: "out",
        enable: true,
        straight: false,
      },
    },
  },
  dark: {
    fpsLimit: 60,
    particles: {
      number: {
        value: 170,
        density: {
          enable: true,
        },
      },
      color: {
        value: "#ed685c",
      },
      opacity: {
        value: 0.8,
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        random: true,
        speed: 1.4,
        direction: "top",
        out_mode: "out",
        enable: true,
        straight: false,
      },
    },
  },
};
