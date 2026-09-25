/* =========================================================
   TEAMS MOTION ADDON — somente adições, não substitui funções existentes
   ========================================================= */
(() => {
  if (window.__teamsMotionAddonLoaded) return;
  window.__teamsMotionAddonLoaded = true;

  const fallbackAvatar = "../assets/icon.jpg";
  let inspectorTimer;

  const getInspector = () => {
    let panel = document.getElementById("member-inspector");
    if (panel) return panel;
    panel = document.createElement("aside");
    panel.id = "member-inspector";
    panel.className = "member-inspector";
    panel.setAttribute("role", "status");
    panel.innerHTML =
      '<img class="member-inspector-avatar" alt=""><div class="member-inspector-copy"><strong></strong><small></small></div><button class="member-inspector-close" type="button" aria-label="Fechar">×</button>';
    document.body.appendChild(panel);
    panel
      .querySelector(".member-inspector-close")
      .addEventListener("click", () => panel.classList.remove("show"));
    return panel;
  };

  const showMemberInspector = (card) => {
    const nameElement = card.querySelector(".member-name");
    const avatar = card.querySelector(".member-avatar");
    if (!nameElement) return;
    const name = nameElement.textContent.trim();
    const isKiller =
      nameElement.classList.contains("is-killer") ||
      card.querySelector(".icon-skull-killer");
    const isCaptain =
      nameElement.classList.contains("is-cap") ||
      card.querySelector(".icon-crown-cap");
    const role = isKiller
      ? "ASSASSINO DESIGNADO"
      : isCaptain
        ? "CAPITÃO DO ESQUADRÃO"
        : "SOBREVIVENTE DO ELENCO";
    const panel = getInspector();
    const panelAvatar = panel.querySelector(".member-inspector-avatar");
    panelAvatar.src = avatar?.src || fallbackAvatar;
    panelAvatar.onerror = () => {
      panelAvatar.onerror = null;
      panelAvatar.src = fallbackAvatar;
    };
    panel.querySelector("strong").textContent = name;
    panel.querySelector("small").textContent = role + "  •  CLIQUE PARA FIXAR";
    document
      .querySelectorAll("#m-members-grid .member-card")
      .forEach((item) => item.classList.remove("member-focus"));
    card.classList.add("member-focus");
    panel.classList.add("show");
    clearTimeout(inspectorTimer);
    inspectorTimer = setTimeout(() => panel.classList.remove("show"), 4200);
  };

  const enhanceCards = (root = document) => {
    root
      .querySelectorAll(".team-card:not(.motion-enter)")
      .forEach((card) => card.classList.add("motion-enter"));
    root
      .querySelectorAll("#m-members-grid .member-card:not(.motion-member)")
      .forEach((card) => {
        card.classList.add("motion-member");
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", "Abrir ficha do membro");
      });
  };

  const grid = document.getElementById("teams-grid");
  if (grid) {
    grid.addEventListener("pointermove", (event) => {
      const card = event.target.closest(".team-card");
      if (!card) return;
      const box = card.getBoundingClientRect();
      const x = ((event.clientX - box.left) / box.width - 0.5) * 2;
      const y = ((event.clientY - box.top) / box.height - 0.5) * 2;
      card.style.setProperty("--card-ry", `${x * 5}deg`);
      card.style.setProperty("--card-rx", `${y * -5}deg`);
      card.style.setProperty(
        "--spot-x",
        `${((event.clientX - box.left) / box.width) * 100}%`,
      );
      card.style.setProperty(
        "--spot-y",
        `${((event.clientY - box.top) / box.height) * 100}%`,
      );
    });
    grid.addEventListener("pointerout", (event) => {
      const card = event.target.closest(".team-card");
      if (!card || card.contains(event.relatedTarget)) return;
      card.style.setProperty("--card-ry", "0deg");
      card.style.setProperty("--card-rx", "0deg");
    });
  }

  const membersGrid = document.getElementById("m-members-grid");
  if (membersGrid) {
    membersGrid.addEventListener("click", (event) => {
      if (event.target.closest("button")) return;
      const card = event.target.closest(".member-card");
      if (card) showMemberInspector(card);
    });
    membersGrid.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (event.target.closest("button")) return;
      const card = event.target.closest(".member-card");
      if (card) {
        event.preventDefault();
        showMemberInspector(card);
      }
    });
  }

  const observer = new MutationObserver(() => enhanceCards());
  observer.observe(document.body, { childList: true, subtree: true });
  enhanceCards();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape")
      document.getElementById("member-inspector")?.classList.remove("show");
  });
})();
