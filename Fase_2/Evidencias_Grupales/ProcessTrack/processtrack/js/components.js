// Carga navbar.html y footer.html dentro de los contenedores #navbar y #footer.
// El login (index.html) no incluye estos contenedores, así que no se ejecuta ahí.

function loadPartial(targetId, url, onLoaded) {
  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      const target = document.getElementById(targetId);
      target.innerHTML = html;
      if (onLoaded) onLoaded();
    })
    .catch((err) => {
      console.error(`No se pudo cargar ${url}:`, err);
    });
}

function markActiveLink() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-right a").forEach((link) => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("navbar")) {
    loadPartial("navbar", "components/navbar.html", markActiveLink);
  }
  if (document.getElementById("footer")) {
    loadPartial("footer", "components/footer.html");
  }
});
