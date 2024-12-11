const buttonActionFilter = document.querySelector(".buttonActionFilter");
const filterRight = document.querySelector(".filter-right");
const contentRight = document.querySelector(".content-right");
const actionFilter = document.querySelector(".action-filter");
const underlineTaba = document.querySelector(".underlineTaba");
const underlineMain = document.querySelector(".underline");
const scrollBarLeft = document.querySelector(".scrollBar");

buttonActionFilter.addEventListener("click", (event) => {
  filterRight.classList.toggle("hideFilter");
  contentRight.classList.toggle("fullContentFilter");
  buttonActionFilter.classList.toggle("fixButtonCloseFilter");
  buttonActionFilter.classList.toggle("rotate-180");
  actionFilter.classList.toggle("clearWidthActionFilter");
  underlineTaba.classList.toggle("fixUnderLineBar");
  underlineMain.classList.toggle("customUnderline");

  const element = document.querySelector(".filter-right");

  if (element && element.classList.contains("hideFilter")) {
    scrollBarLeft.classList.add("customScrollBarMenuLeft");
  } else {
    scrollBarLeft.classList.remove("customScrollBarMenuLeft");
  }
});
