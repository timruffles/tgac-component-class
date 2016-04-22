(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    this.innerHTML = this.points.join(", ");
  }
}


document.registerElement("spark-line", Sparkline);

},{"./sparkline":2}],2:[function(require,module,exports){

},{}]},{},[1]);
