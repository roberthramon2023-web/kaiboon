


/* ==============================
   KAIBOON — IDENTIDADE VISUAL
   PAINEL PRINCIPAL
   ============================== */

:root {
  --red: #c91f36;
  --red-dark: #8f1428;
  --orange: #ff8a32;
  --white: #ffffff;
  --background: #fffaf8;
  --soft: #fff0eb;
  --text: #262126;
  --muted: #777078;
  --border: #f0e2df;
  --shadow: 0 12px 35px rgba(100, 20, 35, 0.08);
  --sidebar-width: 260px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: var(--background);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
  cursor: pointer;
}

/* ESTRUTURA */

.app-layout {
  min-height: 100vh;
}

/* MENU LATERAL */

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: var(--sidebar-width);
  height: 100vh;
  overflow-y: auto;
  padding: 25px 16px;
  background: var(--white);
  border-right: 1px solid var(--border);
  z-index: 100;
}

.sidebar .logo {
  display: block;
  padding: 8px 12px 30px;
  color: var(--red-dark);
  font-size: 27px;
  font-weight: 900;
  letter-spacing: 2px;
}

.sidebar .logo span {
  color: var(--orange);
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.sidebar nav button {
  width: 100%;
  padding: 13px 15px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--muted);
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;
}

.sidebar nav button:hover {
  background: var(--soft);
  color: var(--red);
}

.sidebar nav button.active {
  background: #ffe5e8;
  color: var(--red);
  font-weight: 800;
}

/* CONTEÚDO PRINCIPAL */

.main-content {
  min-height: 100vh;
  margin-left: var(--sidebar-width);
}

/* BARRA SUPERIOR */

.topbar {
  min-height: 78px;
  padding: 16px 4%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: var(--white);
  border-bottom: 1px solid var(--border);
}

.topbar h2 {
  font-size: 18px;
}

.topbar p {
  color: var(--muted);
  font-size: 13px;
}

/* PÁGINAS */

#page-content {
  padding: 35px 4%;
}

.page {
  display: none;
  animation: pageEnter 0.25s ease;
}

.page.active {
  display: block;
}

@keyframes pageEnter {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* DESTAQUE PRINCIPAL */

.hero {
  min-height: 390px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
  overflow: hidden;
  background:
    radial-gradient(circle at 85% 40%, #ffe0d3 0, transparent 32%),
    linear-gradient(120deg, #ffffff 55%, #fff5f0);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.hero-content {
  max-width: 600px;
  position: relative;
  z-index: 2;
}

.tag {
  display: inline-block;
  padding: 8px 14px;
  margin-bottom: 18px;
  background: #ffe9e3;
  color: var(--red);
  border-radius: 30px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.hero h1 {
  margin-bottom: 20px;
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.12;
  letter-spacing: -1.5px;
}

.hero h1 span {
  color: var(--red);
}

.hero-content p {
  max-width: 520px;
  margin-bottom: 28px;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.8;
}

.main-button {
  display: inline-block;
  padding: 14px 25px;
  background: var(--orange);
  color: var(--white);
  border-radius: 10px;
  font-weight: 800;
  transition: 0.25s;
}

.main-button:hover {
  background: var(--red-dark);
  transform: translateY(-2px);
}

/* MASCOTE */

.mascot-area {
  width: 280px;
  min-height: 250px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--soft);
  border: 2px dashed #efb2a9;
  border-radius: 22px;
}

.mascot-placeholder {
  padding: 25px;
  text-align: center;
  color: var(--red);
}

.mascot-placeholder span {
  font-size: 25px;
  font-weight: 900;
}

.mascot-placeholder p {
  margin-top: 10px;
  color: var(--muted);
  font-size: 13px;
}

/* TÍTULOS */

.section-heading {
  margin: 45px 0 25px;
  text-align: center;
}

.section-heading > span {
  color: var(--red);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.section-heading h2 {
  margin: 10px 0;
  color: var(--red-dark);
  font-size: 30px;
}

.section-heading p {
  color: var(--muted);
}

/* CARDS DE SERVIÇOS */

.service-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.service-card {
  min-height: 220px;
  padding: 28px 23px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 17px;
  box-shadow: var(--shadow);
  transition: 0.25s;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: #f3a49b;
  box-shadow: 0 18px 38px rgba(100, 20, 35, 0.13);
}

.service-icon {
  width: 53px;
  height: 53px;
  display: grid;
  place-items: center;
  margin-bottom: 20px;
  border-radius: 14px;
  background: #ffe5e8;
  color: var(--red);
  font-size: 25px;
  font-weight: bold;
}

.service-card.orange .service-icon {
  background: #fff0df;
  color: #e87820;
}

.service-card h3 {
  margin-bottom: 10px;
  font-size: 18px;
}

.service-card p {
  margin-bottom: 18px;
  color: var(--muted);
  font-size: 14px;
}

.service-card a {
  color: var(--red);
  font-size: 13px;
  font-weight: 800;
}

.service-card a:hover {
  color: var(--orange);
}

/* CONTEÚDO INTERNO */

.page h1 {
  margin-bottom: 18px;
  font-size: 34px;
  color: var(--red-dark);
}

.page h2 {
  margin: 28px 0 14px;
  font-size: 23px;
}

.page p {
  color: var(--muted);
  line-height: 1.8;
}

.page ul {
  margin: 18px 0 18px 22px;
  color: var(--muted);
  line-height: 1.9;
}

.info-card {
  margin-top: 22px;
  padding: 25px;
  background: var(--white);
  border: 1px solid var(--border);
  border-left: 4px solid var(--red);
  border-radius: 13px;
  box-shadow: var(--shadow);
}

/* ETAPAS */

.steps {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 15px;
  margin-top: 25px;
}

.step-card {
  padding: 22px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 13px;
  box-shadow: var(--shadow);
}

.step-card span {
  color: var(--orange);
  font-size: 13px;
  font-weight: 900;
}

.step-card h3 {
  margin: 10px 0;
  font-size: 17px;
}

/* PREÇOS */

.price-card {
  margin-top: 25px;
  padding: 25px;
  background: var(--soft);
  border: 1px solid var(--border);
  border-radius: 14px;
}

.price-card strong {
  display: block;
  margin-top: 10px;
  color: var(--red);
  font-size: 24px;
}

/* SOBRE E CONTATO */

.about,
.contact {
  padding: 35px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 15px;
}

.about h2,
.contact h2 {
  margin-bottom: 15px;
  color: var(--red-dark);
}

.contact {
  margin-top: 25px;
  background: linear-gradient(120deg, var(--red-dark), var(--red));
  color: var(--white);
  text-align: center;
}

.contact h2,
.contact p {
  color: var(--white);
}

.contact a {
  display: inline-block;
  margin-top: 20px;
  padding: 13px 23px;
  background: var(--orange);
  color: var(--white);
  border-radius: 10px;
  font-weight: 800;
  transition: 0.2s;
}

.contact a:hover {
  background: #ff9d52;
  transform: translateY(-2px);
}

/* RODAPÉ */

.site-footer {
  margin-left: var(--sidebar-width);
  padding: 28px 4%;
  background: #25151a;
  color: var(--white);
  font-size: 13px;
}

/* TABLETS */

@media (max-width: 950px) {
  :root {
    --sidebar-width: 220px;
  }

  .hero {
    padding: 35px;
  }

  .mascot-area {
    width: 220px;
  }
}

/* CELULARES */

@media (max-width: 700px) {
  .sidebar {
    position: relative;
    width: 100%;
    height: auto;
    padding: 15px;
    border-right: 0;
    border-bottom: 1px solid var(--border);
  }

  .sidebar .logo {
    padding: 8px 10px 18px;
  }

  .sidebar nav {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sidebar nav button {
    padding: 11px;
    font-size: 12px;
  }

  .main-content {
    margin-left: 0;
  }

  #page-content {
    padding: 22px 16px;
  }

  .topbar {
    min-height: 60px;
    padding: 15px 20px;
  }

  .hero {
    flex-direction: column;
    padding: 30px 20px;
    text-align: center;
  }

  .hero-content p {
    margin-left: auto;
    margin-right: auto;
  }

  .mascot-area {
    width: 100%;
    min-height: 200px;
  }

  .service-grid,
  .steps {
    grid-template-columns: 1fr;
  }

  .page h1 {
    font-size: 28px;
  }

  .site-footer {
    margin-left: 0;
    text-align: center;
  }
}
