////////////////////////// SIDEBAR OPEN FOR MOBILE (RESPONSIVE) /////////////////////////////////////////////
const sideBar = document.querySelector(".sidebar");
const openSidebarIcon = document.querySelector(".sidebar-open-icon");
const closeSidebarIcon = document.querySelector(".sidebar-close-icon");

openSidebarIcon.addEventListener("click", () => {
  sideBar.classList.remove("inactive-sidebar");
});

closeSidebarIcon.addEventListener("click", () => {
  sideBar.classList.add("inactive-sidebar");
});

//////////////////////////////// GIVE HEADER OPACITY AFTER SCROLL ////////////////////////////////////////////
const header = document.querySelector("header");
let headerPosition = header.offsetTop;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > headerPosition) {
    setTimeout(() => {
      header.classList.add("header-after-scroll");
    }, 100);
  } else {
    setTimeout(() => {
      header.classList.remove("header-after-scroll");
    }, 100);
  }
});

/////////////////////////////////////////////// SLIDER ////////////////////////////////////////////////////
// SLider By Click
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

const firstDot = document.querySelector(".first-dot");
const secondDot = document.querySelector(".second-dot");
const thirdDot = document.querySelector(".third-dot");

const firstRow = document.querySelector(".first-logo-row");
const secondRow = document.querySelector(".second-logo-row");
const thirdRow = document.querySelector(".third-logo-row");

let rowPosition = 1;

function checkRowPosition() {
  if (rowPosition < 1) {
    rowPosition = 3;
  } else if (rowPosition > 3) {
    rowPosition = 1;
  }

  if (rowPosition === 1) {
    secondRow.classList.add("inactive-logos");
    thirdRow.classList.add("inactive-logos");
    firstRow.classList.remove("inactive-logos");
  } else if (rowPosition === 2) {
    firstRow.classList.add("inactive-logos");
    thirdRow.classList.add("inactive-logos");
    secondRow.classList.remove("inactive-logos");
  } else if (rowPosition === 3) {
    firstRow.classList.add("inactive-logos");
    secondRow.classList.add("inactive-logos");
    thirdRow.classList.remove("inactive-logos");
  }
}

leftArrow.addEventListener("click", () => {
  rowPosition = rowPosition - 1;

  checkRowPosition();
});

rightArrow.addEventListener("click", () => {
  rowPosition = rowPosition + 1;

  checkRowPosition();
});

firstDot.addEventListener("click", () => {
  rowPosition = 1;
  checkRowPosition();
});

secondDot.addEventListener("click", () => {
  rowPosition = 2;
  checkRowPosition();
});

thirdDot.addEventListener("click", () => {
  rowPosition = 3;
  checkRowPosition();
});

// AUTO SLIDER
let autoSlider = setInterval(() => {
  rowPosition = rowPosition + 1;
  checkRowPosition();
}, 3000);

// STOP AUTO SLIDER
const projectPartners = document.querySelector(".project-partners");

projectPartners.addEventListener("mouseover", () => {
  clearInterval(autoSlider);
});

// COUNTINUE AUTO SLIDER
projectPartners.addEventListener("mouseleave", () => {
  autoSlider = setInterval(() => {
    rowPosition = rowPosition + 1;
    checkRowPosition();
  }, 3000);
});

////////////////////////////////////// QUESTION AND ANSWER (ANSWER SHOW) //////////////////////////////////////
const firtsQuestion = document.querySelector(".first-question");
const secondQuestion = document.querySelector(".second-question");
const thirdQuestion = document.querySelector(".third-question");

const firstIconUp = document.querySelector(".first-icon-up");
const secondIconUp = document.querySelector(".second-icon-up");
const thirdIconUp = document.querySelector(".third-icon-up");

const firtsIconDown = document.querySelector(".first-icon-down");
const secondIconDown = document.querySelector(".second-icon-down");
const thirdIconDown = document.querySelector(".third-icon-down");

const firstAnswer = document.querySelector(".first-answer");
const secondAnswer = document.querySelector(".second-answer");
const thirdAnswer = document.querySelector(".third-answer");

let answerPosition = "";

function checkIcons() {
  if (answerPosition === "first") {
    firstIconUp.classList.toggle("hidden-icon");
    firtsIconDown.classList.toggle("hidden-icon");
    secondIconUp.classList.remove("hidden-icon");
    secondIconDown.classList.add("hidden-icon");
    thirdIconUp.classList.remove("hidden-icon");
    thirdIconDown.classList.add("hidden-icon");
  } else if (answerPosition === "second") {
    firstIconUp.classList.remove("hidden-icon");
    firtsIconDown.classList.add("hidden-icon");
    secondIconUp.classList.toggle("hidden-icon");
    secondIconDown.classList.toggle("hidden-icon");
    thirdIconUp.classList.remove("hidden-icon");
    thirdIconDown.classList.add("hidden-icon");
  } else if (answerPosition === "third") {
    firstIconUp.classList.remove("hidden-icon");
    firtsIconDown.classList.add("hidden-icon");
    secondIconUp.classList.remove("hidden-icon");
    secondIconDown.classList.add("hidden-icon");
    thirdIconUp.classList.toggle("hidden-icon");
    thirdIconDown.classList.toggle("hidden-icon");
  }
}

function showAnswer() {
  if (answerPosition === "first") {
    firstAnswer.classList.toggle("hidden-answer");
    secondAnswer.classList.add("hidden-answer");
    thirdAnswer.classList.add("hidden-answer");
    checkIcons();
  } else if (answerPosition === "second") {
    firstAnswer.classList.add("hidden-answer");
    secondAnswer.classList.toggle("hidden-answer");
    thirdAnswer.classList.add("hidden-answer");
    checkIcons();
  } else if (answerPosition === "third") {
    firstAnswer.classList.add("hidden-answer");
    secondAnswer.classList.add("hidden-answer");
    thirdAnswer.classList.toggle("hidden-answer");
    checkIcons();
  }
}

firtsQuestion.addEventListener("click", () => {
  answerPosition = "first";
  showAnswer();
});

secondQuestion.addEventListener("click", () => {
  answerPosition = "second";
  showAnswer();
});

thirdQuestion.addEventListener("click", () => {
  answerPosition = "third";
  showAnswer();
});
