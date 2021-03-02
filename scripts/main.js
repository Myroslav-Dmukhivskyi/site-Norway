
(() => {
  const burgerButton = document.querySelector(".header__burger");
  const header = document.querySelector("header");
  const navBar = document.querySelector(".header__navBar");

  function handleBurgerClick() {
    burgerButton.classList.toggle("header__burger--opened");
    header.classList.toggle("fullHeight");
    navBar.classList.toggle("header__navBar--show");
    document.body.style.overflow = document.body.style.overflow ? "" : "hidden";
  }

  function handleResize() {
    if (window.innerWidth >= 1100) {
      burgerButton.classList.remove("header__burger--opened");
      header.classList.remove("fullHeight");
      navBar.classList.remove("header__navBar--show");
      document.body.style.overflow = "";
    }
  }

  burgerButton.addEventListener("click", handleBurgerClick);
  window.addEventListener("resize", handleResize);
})();


(() => {
  const tabs = document.querySelectorAll(".towns-tabs li");
  const tabPanes = document.querySelectorAll(".tab-pane");

  function handleTabClick(event) {
    for (const tab of tabs) {
      tab.classList.remove("active");
    }

    event.target.closest("li").classList.add("active");

    for (const tabPane of tabPanes) {
      if (tabPane.id === event.target.getAttribute("href").slice(1)) {
        tabPane.classList.add("active");
      } else {
        tabPane.classList.remove("active");
      }
    }
  }

  for (const tab of tabs) {
    tab.addEventListener("click", handleTabClick);
  }
})();