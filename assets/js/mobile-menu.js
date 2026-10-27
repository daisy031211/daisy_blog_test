
(function () {
  const mobileQuery = window.matchMedia("(max-width: 767px)");
  let observer;
  let updating = false;

  function updateMenu() {
    if (!mobileQuery.matches || updating) return;

    const nav = document.querySelector(".greedy-nav");
    if (!nav) return;

    const visible = nav.querySelector(".visible-links");
    const hidden = nav.querySelector(".hidden-links");
    const toggle = nav.querySelector(".greedy-nav__toggle");

    if (!visible || !hidden || !toggle) return;

    const items = Array.from(visible.children).filter(
      item => !item.classList.contains("masthead__menu-item--lg")
    );

    if (items.length === 0) return;

    updating = true;

    if (observer) observer.disconnect();

    items.forEach(item => hidden.prepend(item));
    toggle.classList.remove("hidden");

    if (observer) {
      observer.observe(visible, { childList: true });
    }

    updating = false;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".greedy-nav");
    if (!nav) return;

    const visible = nav.querySelector(".visible-links");
    if (!visible) return;

    observer = new MutationObserver(updateMenu);
    observer.observe(visible, { childList: true });

    updateMenu();
    window.addEventListener("resize", updateMenu);
  });
})();

