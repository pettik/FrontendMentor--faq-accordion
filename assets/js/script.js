const accordionButtons = document.querySelectorAll(".accordion-toggle");

accordionButtons.forEach((button) => {
  // Native buttons also trigger click when activated with Enter or Space.
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
    const nextExpanded = panel.hidden;

    panel.hidden = !nextExpanded;
    panel.setAttribute("aria-hidden", String(!nextExpanded));
    button.setAttribute("aria-expanded", String(nextExpanded));

    if (icon) {
      icon.src = nextExpanded
        ? "assets/images/icon-minus.svg"
        : "assets/images/icon-plus.svg";
    }
  });
});
