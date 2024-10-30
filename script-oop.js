class PageChanger {
  constructor() {
    this.elements = this._getElements();
    this._init();
  }

  _init() {
    this._setEventListeners();
  }

  _getElements() {
    return {
      pageNumber: 0,
      next: document.querySelector("footer img.next"),
      prev: document.querySelector("footer img.prev"),
      random: document.querySelector("footer img.random"),
      heading: document.querySelector("h2"),
      body: document.querySelector("body"),
      circle: document.querySelector("div.circle"),
      pageConfig: [
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
      ],
    };
  }

  _setEventListeners() {
    const { next, prev, random } = this.elements;
    next.addEventListener("click", () => this._nextPage());
    prev.addEventListener("click", () => this._prevPage());
    random.addEventListener("click", () => this._randomPage());

    document.addEventListener("keyup", (e) => {
      e.key === "ArrowRight"
        ? this._nextPage()
        : e.key === "ArrowLeft"
        ? this._prevPage()
        : this._randomPage();
    });
  }

  _changeContent() {
    const { pageNumber, heading, body, circle, pageConfig } = this.elements;
    heading.innerText = pageConfig[pageNumber].text;
    body.style.backgroundColor = pageConfig[pageNumber].color;
    circle.style.backgroundColor = pageConfig[pageNumber].circle;
    body.style.fontFamily = pageConfig[pageNumber].font;
  }

  _nextPage() {
    this.elements.pageNumber += 1;
    if (this.elements.pageNumber > this.elements.pageConfig.length - 1) {
      this.elements.pageNumber = 0;
    }
    this._changeContent();
  }

  _prevPage() {
    this.elements.pageNumber -= 1;
    if (this.elements.pageNumber < 0) {
      this.elements.pageNumber = this.elements.pageConfig.length - 1;
    }
    this._changeContent();
  }

  _randomPage() {
    let randomNum = Math.floor(Math.random() * this.elements.pageConfig.length);
    this.elements.pageNumber = randomNum;
    this._changeContent();
  }
}

new PageChanger();
