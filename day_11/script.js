const bulbs = document.querySelectorAll(".cls-3");
bulbs.forEach((bulb) => {
  bulb.addEventListener("click", () => {
    bulb.classList.toggle("cls-1");
  });
});
