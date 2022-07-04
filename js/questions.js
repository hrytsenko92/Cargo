var item = document.getElementsByClassName("item");

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function (el) {
    el.currentTarget.classList.toggle("item--open");

    for (let i = 0; i < item.length; i++) {
      if (
        item[i] !== el.currentTarget &&
        item[i].className === "item item--open"
      ) {
        item[i].classList.remove("item--open");
      }
    }
  });
}
