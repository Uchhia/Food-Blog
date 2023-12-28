function scrollPrevious1() {
  const repeatGrid = document.querySelector(".repeat-grid1");
  const target = Math.max(repeatGrid.scrollLeft - 500, 0); // Ensure the target is not negative
  repeatGrid.scrollTo({
    left: target,
    behavior: "smooth",
  });
}

function scrollNext1() {
  const repeatGrid = document.querySelector(".repeat-grid1");
  const target = Math.min(
    repeatGrid.scrollLeft + 500,
    repeatGrid.scrollWidth - repeatGrid.clientWidth
  ); // Adjust the limit based on your content
  repeatGrid.scrollTo({
    left: target,
    behavior: "smooth",
  });
}

function scrollPrevious2() {
  const repeatGrid = document.querySelector(".repeat-grid2");
  const target = Math.max(repeatGrid.scrollLeft - 500, 0); // Ensure the target is not negative
  repeatGrid.scrollTo({
    left: target,
    behavior: "smooth",
  });
}

function scrollNext2() {
  const repeatGrid = document.querySelector(".repeat-grid2");
  const target = Math.min(
    repeatGrid.scrollLeft + 500,
    repeatGrid.scrollWidth - repeatGrid.clientWidth
  ); // Adjust the limit based on your content
  repeatGrid.scrollTo({
    left: target,
    behavior: "smooth",
  });
}

function showMenu() {
  var menuElements = document.getElementsByClassName("menu");
  var navElements = document.getElementsByClassName("nav");
  // Check if there is at least one element with the class "menu"
  if (menuElements.length > 0) {
    menuElements[0].style.display = "block";

    setTimeout(function () {
      menuElements[0].style.width = "100vw";
      navElements[0].style.display = "none";
    }, 10);
  }
}

function closeMenu() {
  var menuElements = document.getElementsByClassName("menu");
  var navElements = document.getElementsByClassName("nav");
  // Check if there is at least one element with the class "menu"
  if (menuElements.length > 0) {
    menuElements[0].style.width = "0vw";
    setTimeout(function () {
      menuElements[0].style.display = "none";
      navElements[0].style.display = "flex";
    }, 500);
  }
}
