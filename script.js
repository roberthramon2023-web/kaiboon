

/* ==============================
   KAIBOON — IDENTIDADE VISUAL
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
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: var(--background);
  color: var(--text);
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: inherit;
}

/* ==============================
   BARRA SUPERIOR
   ============================== */

.topbar {
  width: 100%;
  min-height: 78px;
  padding: 16px 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  background: var(--white);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 27px;
  font-weight: 900;
  letter-spacing: 2px;
  color: var(--red-dark);
}

.logo span {
  color: var(--orange);
}

.topbar nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.topbar nav a {
  color: var(--muted);
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;
}

.topbar nav a:hover {
  color: var(--red);
}

.header-button,
.main-button {
  display: inline-block;
  padding: 12px 23px;
  border-radius: 10px;
  font-weight: 700;
  transition: 0.25s;
}

.header-button {
  background: var(--red);
  color: var(--white);
}

.header-button:hover,
.main-button:hover {
  background: var(--red-dark);
  transform: translateY(-2px);
}

/* ==============================
   DESTAQUE PRINCIPAL
   ============================== */

.hero {
  min-height: 570px;
  padding: 65px 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
  overflow: hidden;
  background:
    radial-gradient(circle at 85% 40%, #ffe0d3 0, transparent 32%),
    linear-gradient(120deg, #ffffff 55%, #fff5f0);
}

.hero-content {
  max-width: 610px;
  position: relative;
  z-index: 2;
}

.tag {
  display: inline-block;
  padding: 8px 14px;
  margin-bottom: 22px;
  background: #ffe9e3;
  color: var(--red);
  border-radius: 30px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.hero h1 {
  font-size: clamp(38px, 5vw, 61px);
  line-height: 1.12;
  letter-spacing: -2px;
  margin-bottom: 22px;
}

.hero h1 span {
  color: var(--red);
}

.hero-content p {
  max-width: 520px;
  color: var(--muted);
  font-size: 17px;
  margin-bottom: 30px;
}

.main-button {
  background: var(--orange);
  color: #ffffff;
  padding: 15px 26px;
}

.mascot-area {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 260px;
}

.mascot-image {
  display: block;
  width: 100%;
  max-width: 390px;
  max-height: 470px;
  object-fit: contain;
  filter: drop-shadow(0 18px 25px rgba(80, 20, 50, 0.13));
}

/* ==============================
   SERVIÇOS
   ============================== */

.services {
  padding: 85px 8%;
  background: var(--soft);
}

.section-heading {
  text-align: center;
  margin-bottom: 45px;
}

.section-heading > span {
  color: var(--red);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.section-heading h2 {
  margin: 10px 0;
  font-size: 35px;
  color: var(--red-dark);
}

.section-heading p {
  color: var(--muted);
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.service-card {
  padding: 28px 23px;
  min-height: 250px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 17px;
  box-shadow: var(--shadow);
  transition: 0.25s;
}

.service-card:hover {
  transform: translateY(-7px);
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
  font-size: 25px;
  font-weight: bold;
}

.service-card.red .service-icon {
  background: #ffe5e8;
  color: var(--red);
}

.service-card.orange .service-icon {
  background: #fff0df;
  color: #e87820;
}

.service-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.service-card p {
  color: var(--muted);
  font-size: 14px;
  margin-bottom: 20px;
}

.service-card a {
  color: var(--red);
  font-size: 13px;
  font-weight: 800;
}

.service-card a:hover {
  color: var(--orange);
}

/* ==============================
   SOBRE
   ============================== */

.about {
  padding: 85px 8%;
  text-align: center;
  background: var(--white);
}

.about h2 {
  font-size: 34px;
  color: var(--red-dark);
  margin-bottom: 15px;
}

.about p {
  max-width: 650px;
  margin: auto;
  color: var(--muted);
  font-size: 16px;
}

/* ==============================
   CONTATO
   ============================== */

.contact {
  padding: 75px 8%;
  text-align: center;
  color: var(--white);
  background: linear-gradient(120deg, var(--red-dark), var(--red));
}

.contact h2 {
  font-size: 35px;
  margin-bottom: 12px;
}

.contact p {
  color: #ffe3e5;
  margin-bottom: 25px;
}

.contact a {
  display: inline-block;
  padding: 13px 24px;
  border-radius: 10px;
  background: var(--orange);
  color: var(--white);
  font-weight: 800;
  transition: 0.2s;
}

.contact a:hover {
  background: #ff9d52;
  transform: translateY(-2px);
}

/* ==============================
   RODAPÉ
   ============================== */

footer {
  padding: 28px 6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background: #25151a;
  color: #ffffff;
}

footer .logo {
  color: #ffffff;
}

footer p {
  color: #c9b9bd;
  font-size: 13px;
}

/* ==============================
   RESPONSIVIDADE
   ============================== */

@media (max-width: 1000px) {
  .service-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero {
    padding-left: 6%;
    padding-right: 6%;
  }
}

@media (max-width: 700px) {
  .topbar {
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px 5%;
  }

  .topbar nav {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  .header-button {
    display: none;
  }

  .hero {
    flex-direction: column;
    text-align: center;
    padding: 55px 7%;
  }

  .hero-content p {
    margin-left: auto;
    margin-right: auto;
  }

  .mascot-image {
    max-width: 290px;
    max-height: 340px;
  }

  .services,
  .about,
  .contact {
    padding: 60px 6%;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }

  footer {
    flex-direction: column;
    text-align: center;
  }
}
