const accordionButtons = document.querySelectorAll(".accordion-toggle");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const accordion = button.closest(".accordion");

    if (!accordion) {
      return;
    }

    const panelId = button.getAttribute("aria-controls");

    if (!panelId) {
      return;
    }

    const panel = accordion.querySelector(`#${CSS.escape(panelId)}`);

    if (!panel) {
      return;
    }

    const icon = button.querySelector(".icon");
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const nextExpanded = !isExpanded;

    button.setAttribute("aria-expanded", String(nextExpanded));
    accordion.classList.toggle("open", nextExpanded);
    panel.hidden = !nextExpanded;

    if (icon) {
      icon.src = nextExpanded
        ? "assets/images/icon-minus.svg"
        : "assets/images/icon-plus.svg";
    }
  });
});
