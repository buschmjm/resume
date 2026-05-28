(function () {
  var menu;
  var toggle;
  var branded = false;

  function isAtsPage() {
    return document.body.classList.contains("layout-ats");
  }

  function otherPageUrl() {
    return isAtsPage() ? "index.html" : "resume-ats.html";
  }

  function closeMenu() {
    if (!menu || !toggle) return;
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    if (!menu || !toggle) return;
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  }

  function toggleMenu() {
    if (menu.hidden) openMenu();
    else closeMenu();
  }

  function runPrint(withBranded) {
    closeMenu();
    branded = !!withBranded;
    document.body.classList.toggle("print-branded", branded);
    window.print();
  }

  function handleAction(action) {
    switch (action) {
      case "flat":
        runPrint(false);
        break;
      case "branded":
        runPrint(true);
        break;
      case "other-layout":
        window.location.href = otherPageUrl() + "?openPrint=1";
        break;
      default:
        break;
    }
  }

  function onDocumentClick(event) {
    if (!menu || menu.hidden) return;
    if (menu.contains(event.target) || toggle.contains(event.target)) return;
    closeMenu();
  }

  function onKeydown(event) {
    if (event.key === "Escape") closeMenu();
  }

  function bindMenuItems() {
    var items = menu.querySelectorAll("[data-print-action]");
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener("click", function () {
        handleAction(this.getAttribute("data-print-action"));
      });
    }
  }

  function init() {
    menu = document.getElementById("print-menu");
    toggle = document.getElementById("print-menu-toggle");
    if (!menu || !toggle) return;

    toggle.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleMenu();
    });

    bindMenuItems();
    document.addEventListener("click", onDocumentClick);
    document.addEventListener("keydown", onKeydown);

    window.addEventListener(
      "afterprint",
      function () {
        document.body.classList.remove("print-branded");
        branded = false;
      },
      { once: false }
    );

    if (new URLSearchParams(window.location.search).get("openPrint") === "1") {
      openMenu();
      if (window.history.replaceState) {
        var url = new URL(window.location.href);
        url.searchParams.delete("openPrint");
        window.history.replaceState({}, "", url.pathname + url.hash);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
