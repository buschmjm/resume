(function () {
  var PAGES = {
    devops: "index.html",
    ai: "ai-engineering.html"
  };
  var menu;
  var toggle;

  function currentResume() {
    return document.body.getAttribute("data-resume");
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

  function download(target) {
    closeMenu();
    if (target === currentResume()) {
      window.print();
    } else if (PAGES[target]) {
      // Open the other resume and go straight to its print dialog.
      window.location.href = PAGES[target] + "?print=1";
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
    var items = menu.querySelectorAll("[data-download]");
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener("click", function () {
        download(this.getAttribute("data-download"));
      });
    }
  }

  function autoPrintIfRequested() {
    var params = new URLSearchParams(window.location.search);
    if (params.get("print") !== "1") return;
    if (window.history.replaceState) {
      var url = new URL(window.location.href);
      url.searchParams.delete("print");
      window.history.replaceState({}, "", url.pathname + url.hash);
    }
    var ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    ready.then(function () {
      window.setTimeout(function () {
        window.print();
      }, 150);
    });
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
    autoPrintIfRequested();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
