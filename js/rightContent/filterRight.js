// Dữ liệu mẫu
const data = [
  {
    title: "I. Ban giám hiệu",
    members: [
      { name: "Lê Bá Huy", isHighlighted: true },
      { name: "Nguyễn Tiến Tùng", isHighlighted: false },
      { name: "Nguyễn Thu Hiền", isHighlighted: false },
      { name: "Đào Thùy Trang", isHighlighted: false },
      { name: "Trần Văn Quang", isHighlighted: false },
    ],
  },
  {
    title: "II. Nhân viên thư viện",
    members: [
      { name: "Lê Bá Huy", isHighlighted: false },
      { name: "Nguyễn Tiến Tùng", isHighlighted: false },
      { name: "Hoàng Ngọc Minh", isHighlighted: false },
      { name: "Phạm Thị Ngọc Anh", isHighlighted: false },
    ],
  },
  {
    title: "II. Giáo viên",
    members: [
      { name: "Hoàng Ngọc Minh", isHighlighted: false },
      { name: "Phạm Thị Ngọc Anh", isHighlighted: false },
    ],
  },
];

// Hàm render danh sách
function renderList(data) {
  const accordion = document.getElementById("accordion");

  data.forEach((group, index) => {
    const panel = document.createElement("div");
    const panelHeading = `
          <div class="panel-heading">
            <h4 class="panel-title">
              <div data-toggle="collapse" data-parent="#accordion" href="#collapse${index}">
              <img src="image/CaretDown.svg" alt="" />
                ${group.title}
              </div>
            </h4>
          </div>
        `;

    const panelBody = `
          <div id="collapse${index}" class="panel-collapse collapse in">
            <div class="panel-body">
              <ul class="list-unstyled">
                ${group.members
                  .map(
                    (member) =>
                      `<li class="listFilterText ${
                        member.isHighlighted ? "bg-info" : ""
                      }">
                                                                <img src="image/icon-park-twotone_people.svg" style="margin-right: 8px;" alt="">
   ${member.name}
                      </li>`
                  )
                  .join("")}
              </ul>
            </div>
          </div>
        `;

    panel.innerHTML = panelHeading + panelBody;
    accordion.appendChild(panel);
  });
}

renderList(data);
