const sparklineVis = require("./sparkline");

class Sparkline extends HTMLElement {
  createdCallback() {
    this._observed = ["width", "height", "color"];
    this.style.display = "inline-block";
  }

  attachedCallback() {
    this._takeAllAttributes();
    this._render();
  }

  attributeChanged(name, previous, current) {
    this[name] = current;
  }

  consumeDataset(dataset) {
    alert("thanks " + JSON.stringify(dataset, null, 4));
  }

  // this.points = ...
  set points(string = "") {
    const values = string.split(" ")
      .map(s => parseFloat(s));

    const points = this._points.map(function(y, i) {
      return { y, x: i };
    });
    this._points = points;
  }

  // const  = this.points;
  // document.querySelector("spark-line").points
  get points() {
    return this._points;
  }

  set data(data) {
    return Promise.resolve(data)
      .then((points) => {
        this._points = points;
        this._render();
      })
  }

  set color(v) {
    this._color = v || "black";
  }

  _takeAllAttributes() {
    for(const attribute of this._observed) {
      this[attribute] = this.getAttribute(attribute);
    }
  }

  _render() {
    sparklineVis.render({
      el: this,
      width: this._width,
      height: this._height,
      color: this._color,
      points: this._points,
    })
  }
}


document.registerElement("spark-line", Sparkline);
