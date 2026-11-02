

document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const menuButtons = document.querySelectorAll(
    ".sidebar button[data-page]"
  );
  const pageLinks = document.querySelectorAll("[data-page]");
  const sectionTitle = document.querySelector("#current-section");

  function showPage(pageName, updateHistory = true) {
    const selectedPage = document.getElementById(`page-${pageName}`);

    if (!selectedPage) {
      console.warn("Página não encontrada:", pageName);
      return;
    }

    // Esconde todas as páginas
    pages.forEach((page) => {
      page.classList.remove("active");
      page.setAttribute("aria-hidden", "true");
    });

    // Mostra a página escolhida
    selectedPage.classList.add("active");
    selectedPage.setAttribute("aria-hidden", "false");

    // Atualiza o menu lateral
    menuButtons.forEach((button) => {
      const active = button.dataset.page === pageName;

      button.classList.toggle("active", active);

      if (active) {
        button.setAttribute("aria-current", "page");
      } else {
        button.removeAttribute("aria-current");
      }
    });

    // Atualiza o título superior
    const activeButton = Array.from(menuButtons).find(
      (button) => button.dataset.page === pageName
    );

    if (sectionTitle) {
      sectionTitle.textContent = activeButton
        ? activeButton.textContent.trim()
        : "Início";
    }

    // Atualiza o endereço sem recarregar o site
    if (updateHistory) {
      history.pushState({ page: pageName }, "", `#${pageName}`);
    }

    // Volta ao topo
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // Navegação pelos botões e cartões
  pageLinks.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      showPage(element.dataset.page);
    });
  });

  // Botões voltar e avançar do navegador
  window.addEventListener("popstate", () => {
    const pageName = location.hash.replace("#", "") || "inicio";
    showPage(pageName, false);
  });

  // Abre diretamente a página indicada no endereço
  const initialPage = location.hash.replace("#", "") || "inicio";

  if (document.getElementById(`page-${initialPage}`)) {
    showPage(initialPage, false);
  } else {
    showPage("inicio", false);
  }
});
