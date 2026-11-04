/* Dibuja el portafolio a partir de js/content.js.
   No necesitas editar este archivo para cambiar el contenido. */
(function () {
  "use strict";

  var P = window.PORTFOLIO;
  if (!P) return;

  /* ---------- utilidades ---------- */
  function $(id) { return document.getElementById(id); }

  function el(tag, className, text) {
    var n = document.createElement(tag);
    if (className) n.className = className;
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }

  /* Solo se permiten enlaces http(s) y mailto */
  function enlaceSeguro(url) {
    return typeof url === "string" && /^(https?:\/\/|mailto:)/i.test(url.trim());
  }

  function limpio(valor) {
    return typeof valor === "string" && valor.trim() !== "" && valor.indexOf("[") === -1;
  }

  /* ---------- cabecera y portada ---------- */
  document.title = P.nombre + " | " + P.rol;
  $("brandMark").textContent = P.iniciales || "";
  $("brandName").textContent = P.nombreCorto || P.nombre;
  $("heroEyebrow").textContent = P.rol + (P.ubicacion ? " · " + P.ubicacion : "");
  $("heroTitulo").textContent = P.nombre;
  $("heroLead").textContent = P.frase;

  /* foto: se acepta una ruta de la carpeta (img/foto.jpg) o un enlace https */
  var foto = $("foto");
  if (typeof P.foto === "string" && /^(img\/[\w.\-]+|https:\/\/\S+)$/i.test(P.foto.trim())) {
    foto.alt = "Foto de " + P.nombre;
    foto.onload = function () { foto.hidden = false; };
    foto.onerror = function () { foto.hidden = true; };
    foto.src = P.foto.trim();
  }

  var facts = $("heroFacts");
  (P.datosRapidos || []).forEach(function (t) { facts.appendChild(el("li", "", t)); });

  if (P.capas && P.capas.length === 3) {
    $("layer1").textContent = P.capas[0];
    $("layer2").textContent = P.capas[1];
    $("layer3").textContent = P.capas[2];
  }

  /* ---------- sobre mí ---------- */
  var about = $("aboutBody");
  (P.sobreMi || []).forEach(function (t) { about.appendChild(el("p", "", t)); });

  /* ---------- habilidades ---------- */
  var skills = $("skills");
  (P.habilidades || []).forEach(function (g) {
    var box = el("div", "skill");
    box.appendChild(el("h3", "", g.grupo));
    var ul = el("ul", "chips");
    (g.items || []).forEach(function (i) { ul.appendChild(el("li", "", i)); });
    box.appendChild(ul);
    skills.appendChild(box);
  });

  /* ---------- proyectos ---------- */
  var projects = $("projects");
  (P.proyectos || []).forEach(function (p) {
    var card = el("article", "project");
    var head = el("div", "project__head");
    head.appendChild(el("h3", "", p.titulo));
    if (p.estado) head.appendChild(el("span", "badge", p.estado));
    card.appendChild(head);
    card.appendChild(el("p", "project__desc", p.descripcion));

    var tech = el("ul", "tags");
    (p.tecnologias || []).forEach(function (t) { tech.appendChild(el("li", "", t)); });
    if (tech.children.length) card.appendChild(tech);

    if (enlaceSeguro(p.enlace)) {
      var a = el("a", "link", (p.textoEnlace || "Ver proyecto") + " →");
      a.href = p.enlace;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      card.appendChild(a);
    }
    projects.appendChild(card);
  });

  /* ---------- formación ---------- */
  var tl = $("timeline");
  (P.formacion || []).forEach(function (f) {
    var li = el("li", "tl");
    li.appendChild(el("span", "tl__when", f.periodo));
    var body = el("div", "tl__body");
    body.appendChild(el("h3", "", f.titulo));
    body.appendChild(el("p", "tl__where", f.lugar));
    if (f.detalle) body.appendChild(el("p", "", f.detalle));
    li.appendChild(body);
    tl.appendChild(li);
  });

  /* ---------- contacto ---------- */
  var c = P.contacto || {};
  $("contactLead").textContent = c.texto || "";
  var list = $("contactList");

  function item(etiqueta, texto, url) {
    var li = el("li");
    li.appendChild(el("span", "contact__label", etiqueta));
    if (url && enlaceSeguro(url)) {
      var a = el("a", "contact__value", texto);
      a.href = url;
      if (url.indexOf("mailto:") !== 0) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      li.appendChild(a);
    } else {
      li.appendChild(el("span", "contact__value", texto));
    }
    list.appendChild(li);
  }

  if (c.correo) {
    item("Correo", c.correo, limpio(c.correo) ? "mailto:" + c.correo : "");
  }
  if (limpio(c.github)) item("GitHub", c.github.replace(/^https?:\/\//, ""), c.github);
  if (limpio(c.linkedin)) item("LinkedIn", c.linkedin.replace(/^https?:\/\//, ""), c.linkedin);
  if (limpio(c.whatsapp) && /^\d{8,15}$/.test(c.whatsapp)) {
    item("WhatsApp", "+" + c.whatsapp, "https://wa.me/" + c.whatsapp);
  }

  /* ---------- pie ---------- */
  $("footerText").textContent = "© " + new Date().getFullYear() + " " + P.nombre + ". " + (P.pie || "");

  /* ---------- tema claro / oscuro ---------- */
  var root = document.documentElement;
  var themeBtn = $("themeBtn");

  function temaActual() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  themeBtn.addEventListener("click", function () {
    var nuevo = temaActual() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", nuevo);
    try { localStorage.setItem("tema", nuevo); } catch (e) {}
  });

  /* ---------- menú en pantallas pequeñas ---------- */
  var menuBtn = $("menuBtn");
  var nav = $("nav");

  function cerrarMenu() {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  menuBtn.addEventListener("click", function () {
    var abierto = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", abierto ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") cerrarMenu();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") cerrarMenu();
  });

  /* ---------- enlace activo según la sección visible ---------- */
  var links = Array.prototype.slice.call(nav.querySelectorAll("a"));
  if ("IntersectionObserver" in window) {
    var secciones = links
      .map(function (a) { return document.querySelector(a.getAttribute("href")); })
      .filter(Boolean);

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id);
          });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });

    secciones.forEach(function (s) { io.observe(s); });
  }
})();