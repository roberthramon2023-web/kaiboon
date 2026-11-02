
document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const menuButtons = document.querySelectorAll(".sidebar button[data-page]");
  const pageLinks = document.querySelectorAll("[data-page]");
  const sectionTitle = document.querySelector("#current-section");

  function showPage(pageName) {
    const selectedPage = document.getElementById(`page-${pageName}`);

    if (!selectedPage) {
      console.warn("Página não encontrada:", pageName);
      return;
    }

    pages.forEach((page) => {
      page.classList.remove("active");
    });

    selectedPage.classList.add("active");

    menuButtons.forEach((button) => {
      const active = button.dataset.page === pageName;
      button.classList.toggle("active", active);

      if (active) {
        button.setAttribute("aria-current", "page");
      } else {
        button.removeAttribute("aria-current");
      }
    });

    const activeButton = Array.from(menuButtons).find(
      (button) => button.dataset.page === pageName
    );

    if (sectionTitle) {
      sectionTitle.textContent = activeButton
        ? activeButton.textContent.trim()
        : "Início";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  pageLinks.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      showPage(element.dataset.page);
    });
  });

  showPage("inicio");
});

