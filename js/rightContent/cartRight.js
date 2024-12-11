const dataListStatistics = [
  {
    label: "Sổ đã nộp",
    count: 686,
    icon: "image/fileChecked.svg",
  },
  {
    label: "Sổ đã ký",
    count: 500,
    icon: "image/pen.svg",
  },
  {
    label: "Sổ đang ký",
    count: 4,
    icon: "image/penAndFile.svg ",
  },
  {
    label: "Sổ từ chối",
    count: 34,
    icon: "image/fileError.svg",
  },
];

function renderListStatistic(dataListStatistics) {
  const listStatistics = document.getElementById("listStatistics");
  listStatistics.innerHTML = "";
  dataListStatistics.forEach((group, index) => {
    const item = `
    <div class="grid-listStatistics flex j-between">
                            <div class="itemStatistics flex f-col">
                                <p>${group.label}</p>
                                <span>${group.count}</span>
                            </div>
                            <img style="transform: scale(0.85)" src="${group.icon}" alt="">
                        </div>`;
    listStatistics.innerHTML += item;
  });
}

renderListStatistic(dataListStatistics);
