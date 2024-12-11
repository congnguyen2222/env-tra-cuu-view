const clearWidth = document.querySelector(".tab");
const scrollBar = document.querySelector(".scrollBar");
const menubar = document.getElementById("menubar");

// Hàm toggle class và cập nhật giao diện
document.querySelector(".menuIcon").addEventListener("click", () => {
  menubar.classList.toggle("show");
  const menubarRight = document.getElementById("menubarRight");
  menubarRight.classList.toggle("clearWidth");

  const isShown = menubar.classList.contains("show");
  scrollBar.style.left = isShown ? `${menubar.clientWidth + 4}px` : `-10px`;
  menubar.style.width = isShown ? "" : "300px";
  menubar.style.left = isShown ? "" : "-300px";
  clearWidth.style.width = isShown ? "calc(100% - 300px)" : "100%";
});

// Xử lý sự kiện kéo thả menu
let isDragging = false;

scrollBar.addEventListener("mousedown", () => (isDragging = true));
document.addEventListener("mouseup", () => (isDragging = false));
document.addEventListener("mousemove", (event) => {
  clearWidth.style.transition = "width 0.4s ease";
  if (!isDragging) return;

  clearWidth.style.transition = "width 0s ease";
  const container = scrollBar.parentElement;
  const newLeft = scrollBar.offsetLeft + event.movementX;
  const boundedLeft = Math.max(
    300,
    Math.min(
      newLeft,
      Math.min(container.offsetWidth - scrollBar.offsetWidth, 600)
    )
  );

  scrollBar.style.left = `${boundedLeft}px`;
  const left = boundedLeft;
  const right = container.offsetWidth - (left + scrollBar.offsetWidth);

  menubar.style.width = `${left}px`;
  menubar.style.left = `-${left}px`;
  clearWidth.style.width = `${right - 11}px`;
});
