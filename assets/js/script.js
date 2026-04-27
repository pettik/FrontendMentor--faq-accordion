const accordionButtons = document.querySelectorAll(".accordion-toggle");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const accordion = button.closest(".accordion");
    const panel = document.querySelector(
      `#${button.getAttribute("aria-controls")}`,
    );
    const icon = button.querySelector(".icon");

    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    accordion.classList.toggle("open", !isExpanded);
    panel.hidden = isExpanded;

    icon.src = isExpanded
      ? "assets/images/icon-plus.svg"
      : "assets/images/icon-minus.svg";
  });
});
