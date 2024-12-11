const underline = document.querySelector(".underlineMain");
const tabListMenubar = document.querySelector(".tabMenubar");
const searchIcon = document.querySelector(".searchIcon");
const textInputMenubar = document.querySelector(".textInputMenubar");

// Tạo danh sách tabs
const createTabs = (data, container, initialActive) =>
  data.forEach((tab, index) => {
    const li = document.createElement("li");
    li.className = index === initialActive ? "active" : "";
    li.setAttribute("data-toggle", "tab");
    li.setAttribute("href", `#${tab.id}`);
    li.textContent = tab.label;
    container.appendChild(li);
  });

createTabs(
  [
    { id: "taba1", label: "Trường" },
    { id: "taba2", label: "Phòng" },
    { id: "taba3", label: "Sở" },
  ],
  tabListMenubar,
  0
);

// Cập nhật underline cho tab
const updateUnderline = (activeTab) => {
  if (!activeTab) return;
  const { width, left } = activeTab.getBoundingClientRect();
  const containerLeft = activeTab.parentElement.getBoundingClientRect().left;
  underline.style.width = `${width}px`;
  underline.style.left = `${left - containerLeft}px`;
};

// Xử lý sự kiện click tab
Array.from(tabListMenubar.children).forEach((tab) => {
  tab.addEventListener("click", () => {
    tabListMenubar
      .querySelectorAll("li")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    updateUnderline(tab);
  });
});

// Khởi tạo underline
updateUnderline(tabListMenubar.querySelector(".active"));

// Xử lý mở folder
document.querySelectorAll(".tree .folder").forEach((folder) =>
  folder.addEventListener("click", function () {
    this.classList.toggle("open");
  })
);

searchIcon.addEventListener("click", (event) => {
  textInputMenubar.focus();
});
