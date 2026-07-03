(function () {
    const currentScript = document.currentScript;
    const minecraftRoot = currentScript ? currentScript.dataset.minecraftRoot || "" : "";
    const container = document.getElementById("minecraft-header-container");
    const fallbackHeader = `
<div>
  <h1 class="welcomer">Minecraft Projects</h1>
  <div class="buttonswrap">
    <a href="alphaworld/alphaworld.html" data-minecraft-href="alphaworld/alphaworld.html" class="minecraftbutton">ALPHA WORLD</a>
    <a href="elyxion/elyxion.html" data-minecraft-href="elyxion/elyxion.html" class="minecraftbutton">Elyxion</a>
  </div>
  <div class="spacing">
    <hr class="divider" />
  </div>
</div>`;

    if (!container) {
        return;
    }

    function applyHeader(html) {
        container.innerHTML = html;

        container.querySelectorAll("[data-minecraft-href]").forEach((link) => {
            link.setAttribute("href", `${minecraftRoot}${link.dataset.minecraftHref}`);
        });
    }

    fetch(`${minecraftRoot}minecraft_header.html`)
        .then((response) => response.ok ? response.text() : fallbackHeader)
        .then(applyHeader)
        .catch(() => applyHeader(fallbackHeader));
})();
