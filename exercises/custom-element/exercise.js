const sparklineVis = require("./sparkline");

class Sparkline extends HTMLElement {
  createdCallback() {
    this._observed = ["width", "height", "color", "points"];
  }

  attachedCallback() {
    this._takeAllAttributes();
    this._render();
  }

  attributeChanged(name, previous, current) {
    this[name] = current;
  }

  // this.points = ...
  set points(string) {
    const values = string.split(" ")
      .map(s => parseFloat(s));
    this._points = values;
  }

  // const  = this.points;
  // document.querySelector("spark-line").points
  get points() {
    return this._points;
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
