// page content
const pages = [
  {
    text: "a confirmed insomniac.",
    color: "red",
    circle: "blue",
    font: "Karrik",
  },
  {
    text: "kind of cold (it's freezing in here...)",
    color: "yellow",
    circle: "brown",
    font: "LeMurmure",
  },
  {
    text: "a shining web dev.",
    color: "orange",
    circle: "green",
    font: "Pilowlava",
  },
  {
    text: "really into RHOM. Larsa is a pain tho...",
    color: "brown",
    circle: "white",
    font: "Gulax",
  },
];

// page number variable initial state
let pageNumber = 0;

// these variable select elements in HTML for actions
const nextTag = document.querySelector("footer img.next");
const prevTag = document.querySelector("footer img.prev");
const randomTag = document.querySelector("footer img.random");

// these variable select elements in HTML for changes
const h2Tag = document.querySelector("h2");
const bodyTag = document.querySelector("body");
const circleTag = document.querySelector("div.circle");

// will update content and styling with array/object content
const updateContent = () => {
  h2Tag.innerText = pages[pageNumber].text;
  bodyTag.style.backgroundColor = pages[pageNumber].color;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.fontFamily = pages[pageNumber].font;
};

// next actions. will increase number and start at 1 again. will also update inner text

const next = () => {
  pageNumber += 1;

  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }

  updateContent();
};

// previous actions. will decrease number and start at 3 again. will also update inner text.
const previous = () => {
  pageNumber -= 1;

  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }
  updateContent();
};

// random action. page number will just be any number the length array

const random = () => {
  // variable for random number
  let randomNum = Math.floor(Math.random() * pages.length);

  pageNumber = randomNum;
  updateContent();
};

// adding click events to icons/tags

nextTag.addEventListener("click", function () {
  next();
});

prevTag.addEventListener("click", function () {
  previous();
});

randomTag.addEventListener("click", function () {
  random();
});

// adding keyboard events to icons/tags

document.addEventListener("keyup", function (e) {
  console.log(e);

  // if the key pressed is arrow right
  if (e.key === "ArrowRight") {
    next();
  } else if (e.key === "ArrowLeft") {
    // if the key pressed is arrow left
    previous();
  } else {
    random();
  }
});
