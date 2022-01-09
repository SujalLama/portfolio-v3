export const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };