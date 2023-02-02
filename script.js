// page number initial state
let pageNumber = 0;

// page content
const pages = [
  {
    text: "apple",
    color: "red",
    circle: "blue",
    font: "Karrik",
  },
  {
    text: "banana",
    color: "yellow",
    circle: "brown",
    font: " LeMurmure",
  },
  {
    text: "cheese",
    color: "orange",
    circle: "green",
    font: "Pilowlava",
  },
  {
    text: "donuts",
    color: "brown",
    circle: "white",
    font: "Gulax",
  },
];

// these variable select elements in HTML
const nextTag = document.querySelector("footer img.next");
const prevTag = document.querySelector("footer img.prev");
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

// adding click events to icons/tags

nextTag.addEventListener("click", function () {
  next();
});

prevTag.addEventListener("click", function () {
  previous();
});
