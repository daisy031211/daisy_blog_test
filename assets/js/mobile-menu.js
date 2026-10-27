
(function () {
  const mobileQuery = window.matchMedia("(max-width: 767px)");

  const menuOrder = [
    "/development/",
    "/ctf-wargame/",
    "/bug-bounty/",
    "/tech-docs/",
    "/research/",
    "/activities/"
  ];

  let observer;
  let updating = false;

  function updateMenu() {
    if (updating) return;

    const nav = document.querySelector(".greedy-nav");
    if (!nav) return;

    const visible = nav.querySelector(".visible-links");
    const hidden = nav.querySelector(".hidden-links");
    const toggle = nav.querySelector(".greedy-nav__toggle");

    if (!visible || !hidden || !toggle) return;

    updating = true;
    if (observer) observer.disconnect();

    // 메뉴 항목을 모두 수집
    const items = [
      ...Array.from(visible.children),
      ...Array.from(hidden.children)
    ].filter(item =>
      !item.classList.contains("masthead__menu-item--lg")
    );

    // navigation.yml의 순서로 정렬
    function getOrder(item) {
      const href = item.querySelector("a")?.getAttribute("href") || "";
      const index = menuOrder.findIndex(path =>
        href.split("?")[0].endsWith(path)
      );
      return index === -1 ? menuOrder.length : index;
    }

    items.sort((a, b) => getOrder(a) - getOrder(b));

    if (mobileQuery.matches) {
      // 모바일: 모든 메뉴를 드롭다운으로
      items.forEach(item => hidden.appendChild(item));
      toggle.classList.remove("hidden");
    } else {
      // PC: 원래 순서로 상단 메뉴에 복구
      items.forEach(item => visible.appendChild(item));
    }

    updating = false;

    if (observer) {
      observer.observe(visible, { childList: true });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".greedy-nav");
    if (!nav) return;

    const visible = nav.querySelector(".visible-links");
    if (!visible) return;

    observer = new MutationObserver(updateMenu);
    observer.observe(visible, { childList: true });

    updateMenu();
    mobileQuery.addEventListener("change", updateMenu);
  });
})();

