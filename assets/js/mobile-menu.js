
(function () {
  const mobileQuery = window.matchMedia("(max-width: 767px)");
  let observer;
  let updating = false;

  const menuOrder = [
    "/development/",
    "/ctf-wargame/",
    "/bug-bounty/",
    "/tech-docs/",
    "/research/",
    "/activities/"
  ];

  function updateMenu() {
    if (!mobileQuery.matches || updating) return;

    const nav = document.querySelector(".greedy-nav");
    if (!nav) return;

    const visible = nav.querySelector(".visible-links");
    const hidden = nav.querySelector(".hidden-links");
    const toggle = nav.querySelector(".greedy-nav__toggle");

    if (!visible || !hidden || !toggle) return;

    updating = true;
    if (observer) observer.disconnect();

    // 상단에 남은 메뉴를 모두 드롭다운으로 이동
    Array.from(visible.children)
      .filter(item =>
        !item.classList.contains("masthead__menu-item--lg")
      )
      .forEach(item => hidden.appendChild(item));

    // 드롭다운 메뉴를 원래 순서대로 정렬
    const items = Array.from(hidden.children);

    items.sort((a, b) => {
      const getOrder = (item) => {
        const href = item.querySelector("a")?.getAttribute("href") || "";

        const index = menuOrder.findIndex(path =>
          href.split("?")[0].endsWith(path)
        );

        return index === -1 ? menuOrder.length : index;
      };

      return getOrder(a) - getOrder(b);
    });

    items.forEach(item => hidden.appendChild(item));

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
