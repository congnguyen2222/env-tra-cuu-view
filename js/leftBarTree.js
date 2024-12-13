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
  underline.style.width = `${width - 20}px`;
  underline.style.left = `${left - containerLeft + 9}px`;
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
// Lấy tất cả các phần tử .folder trong cây thư mục
const folderElements = document.querySelectorAll(".folder");

// Lặp qua từng phần tử và gắn sự kiện click
folderElements.forEach((folder) => {
  folder.addEventListener("click", () => {
    // Tìm phần tử img bên trong folder có class rotate-90 hoặc rotate-360
    const rotateImg = folder.querySelector("img.rotate-90, img.rotate-360");

    if (rotateImg) {
      // Kiểm tra folder có class "qi-activeMenuBar" hay không
      if (folder.classList.contains("qi-activeMenuBar")) {
        // Nếu có, chuyển rotate-360 thành rotate-90
        rotateImg.classList.remove("rotate-360");
        rotateImg.classList.add("rotate-90");
      } else {
        // Nếu không, chuyển rotate-90 thành rotate-360
        rotateImg.classList.remove("rotate-90");
        rotateImg.classList.add("rotate-360");
      }

      // Toggle class "qi-activeMenuBar" để duy trì trạng thái
      folder.classList.toggle("qi-activeMenuBar");
    }
  });
});
