(function () {
    const currentScript = document.currentScript;
    const root = currentScript ? currentScript.dataset.root || "" : "";
    const container = document.getElementById("header-container");
    const fallbackHeader = `
<div class="titlehead"> <!-- This "titlehead" class is used for modifying the entire head section -->
    <div class="header"> <!-- This "header" class is used for the title or "logo" -->
        <a href="index.html" data-root-href="index.html" class="title-link"><h1>Katy's Projects</h1></a>
    </div>
    <div class="explore"> <!-- This class "explore" is for the buttons -->
        <a href="minecraft/minecraft_projects.html" data-root-href="minecraft/minecraft_projects.html" class="headerbutton">Minecraft Projects</a>
        <a href="mystie_forest/mystie_forest.html" data-root-href="mystie_forest/mystie_forest.html" class="headerbutton">Mystie Forest</a>
    </div>
</div>`;

    if (!container) {
        return;
    }

    function applyHeader(html) {
        container.innerHTML = html;

        container.querySelectorAll("[data-root-href]").forEach((link) => {
            link.setAttribute("href", `${root}${link.dataset.rootHref}`);
        });
    }

    fetch(`${root}common/header.html`)
        .then((response) => response.ok ? response.text() : fallbackHeader)
        .then(applyHeader)
        .catch(() => applyHeader(fallbackHeader));
})();
