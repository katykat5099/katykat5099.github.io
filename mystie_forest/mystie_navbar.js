(function () {
    const currentScript = document.currentScript;
    const mystieRoot = currentScript ? currentScript.dataset.mystieRoot || "" : "";
    const container = document.getElementById("mystie-header-container");
    const fallbackHeader = `
<div>
  <h1 class="welcomer">The Mystie Forest</h1>
  <div class="mystieforestbar">
    <a href="mystie_dex.html" data-mystie-href="mystie_dex.html" class="mystiebutton">Dex</a>
    <a href="mystie_characters.html" data-mystie-href="mystie_characters.html" class="mystiebutton">Characters</a>
    <a href="mystie_region.html" data-mystie-href="mystie_region.html" class="mystiebutton">Region</a>
  </div>
  <div class="spacing"><hr class="divider" /></div>
</div>
`;

    if (!container) {
        return;
    }

    function applyHeader(html) {
        container.innerHTML = html;

        container.querySelectorAll("[data-mystie-href]").forEach((link) => {
            link.setAttribute("href", `${mystieRoot}${link.dataset.mystieHref}`);
        });
    }

    fetch(`${mystieRoot}mystie_navbar.html`)
        .then((response) => response.ok ? response.text() : fallbackHeader)
        .then(applyHeader)
        .catch(() => applyHeader(fallbackHeader));
})();
