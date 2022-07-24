let Projects = [];

function myproject(event) {
  event.preventDefault();
  let title = document.getElementById("project").value;
  let dateStart = document.getElementById("start-input").value;
  let dateEnd = document.getElementById("end-input").value;
  let content = document.getElementById("description").value;
  let node = document.getElementById("node");
  let react = document.getElementById("react");
  let next = document.getElementById("next");
  let type = document.getElementById("type");
  let image = document.getElementById("upload");
  // console.log(title);
  // console.log(content);
  // console.log(image);

  let printIcon = "";

  if (node.checked == true) {
    printIcon += '<img value="node" id="node" src="assets/img/node.png">';
  }
  if (react.checked == true) {
    printIcon += '<img value="react" id="react" src="assets/img/react.png">';
  }
  if (next.checked == true) {
    printIcon +=
      '<img value="next" id="next" src="assets/img/javascript.png">';
  }
  if (type.checked == true) {
    printIcon += '<img value="type" id="type" src="assets/img/type.png">';
  }
  image = URL.createObjectURL(image.files[0]);
  dateStart = new Date(dateStart);
  dateEnd = new Date(dateEnd);

  let Project = {
    dateStart,
    dateEnd,
    title,
    content,
    image,
    printIcon,
    author: "Sabdha Muhamad Bagdja Manggala",
    postAt: new Date(),
  };

  // console.log(Project);
  Projects.push(Project);
  renderProject();
}

// ${getDistanceTime(Projects[i].postAt)}

function renderProject() {
  let projectWrapper = document.getElementById("contents");

  projectWrapper.innerHTML = "";

  for (let i = 0; i < Projects.length; i++) {
    projectWrapper.innerHTML += `
      <div class="project-list-item">
        <a href="project-detail.html">
          <div class="card-img">
             <img src=${Projects[i].image}>
          </div>
            <div class="card-title">
                <h3>
                ${Projects[i].title}</h3>
            </div>
          <div class="card-drs">
          <p style="padding-left: 10px; padding-right: 10px;">
          ${getFullTime(Projects[i].dateEnd, Projects[i].dateStart)}
          </p>
          </div>
          <div class="card-desc">
              <p>
                  ${Projects[i].content}
                </p>
          </div>
          <div class="card-icon">
            ${Projects[i].printIcon}
          </div>
        </a>
        <div class="card-btn">
          <div class="edit">
              <button>edit</button>
          </div>
          <div class="card-delete">
              <button>delete</button>
          </div>
        </div>
  
      </div>`;
  }
  alert("Thank You. Your Project is upload");
}

function getFullTime(endDate, startDate) {
  let startMonth = startDate.getMonth();
  let endMonth = endDate.getMonth();
  let startYear = startDate.getFullYear();
  let endYear = endDate.getFullYear();

  if (startYear == endYear) {
    if (startMonth == endMonth) {
      month = 1;
      return month + " Month";
    } else {
      month = endMonth - startMonth;
      return month + " Month";
    }
  }

  if (endYear > startYear) {
    if (endYear - startYear == 1) {
      if (startMonth == endMonth) {
        return "1 Year";
      } else if (startMonth > endMonth) {
        month = (startMonth - endMonth - 12) * -1;
        return month + " Month";
      } else if (startMonth < endMonth) {
        month = endMonth - startMonth;
        return "1 Year" + month + bulan;
      }
    } else {
      year = endYear - startYear;
      if (startMonth == endMonth) {
        return year + " Year";
      } else if (startMonth > endMonth) {
        year -= 1;
        month = (startMonth - endMonth - 12) * -1;
        return year + " Year " + month + " Month";
      } else if (startMonth < endMonth) {
        month = endMonth - startMonth;
        return year + " Year " + month + " Month";
      }
    }
  }
}
