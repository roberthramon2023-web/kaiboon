
document.addEventListener("DOMContentLoaded", () => {
  // Animação suave ao passar pelos cartões
  const cards = document.querySelectorAll(".service-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("active");
    });
  });

  // Navegação suave
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  console.log("KAIBOON carregada com sucesso!");
});
