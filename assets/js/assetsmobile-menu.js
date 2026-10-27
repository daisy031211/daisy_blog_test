
(function () {
  function updateMobileMenu() {
    const nav = document.querySelector(".greedy-nav");
    if (!nav) return;

    const visible = nav.querySelector(".visible-links");
    const hidden = nav.querySelector(".hidden-links");
    const toggle = nav.querySelector(".greedy-nav__toggle");

    if (!visible || !hidden || !toggle) return;

    const mobile = window.matchMedia("(max-width: 767px)").matches;

    if (mobile) {
      Array.from(visible.children).forEach(function (item) {
        if (!item.classList.contains("masthead__menu-item--lg")) {
          hidden.appendChild(item);
        }
      });

      toggle.classList.remove("hidden");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    updateMobileMenu();
    window.addEventListener("resize", updateMobileMenu);
  });
})();
