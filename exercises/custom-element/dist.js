(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sparklineVis = require("./sparkline");

var Sparkline = function (_HTMLElement) {
  _inherits(Sparkline, _HTMLElement);

  function Sparkline() {
    _classCallCheck(this, Sparkline);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Sparkline).apply(this, arguments));
  }

  _createClass(Sparkline, [{
    key: "createdCallback",
    value: function createdCallback() {
      this._observed = ["width", "height", "color", "points"];
    }
  }, {
    key: "attachedCallback",
    value: function attachedCallback() {
      this._takeAllAttributes();
      this._render();
    }
  }, {
    key: "attributeChanged",
    value: function attributeChanged(name, previous, current) {
      this[name] = current;
    }

    // this.points = ...

  }, {
    key: "_takeAllAttributes",
    value: function _takeAllAttributes() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._observed[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var attribute = _step.value;

          this[attribute] = this.getAttribute(attribute);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "_render",
    value: function _render() {
      sparklineVis.render({
        el: this,
        width: this._width,
        height: this._height,
        color: this._color,
        points: this._points
      });
    }
  }, {
    key: "points",
    set: function set(string) {
      var values = string.split(" ").map(function (s) {
        return parseFloat(s);
      });
      this._points = values;
    }

    // const  = this.points;
    // document.querySelector("spark-line").points
    ,
    get: function get() {
      return this._points;
    }
  }]);

  return Sparkline;
}(HTMLElement);

document.registerElement("spark-line", Sparkline);

},{"./sparkline":2}],2:[function(require,module,exports){
"use strict";

module.exports.render = function (_ref) {
  var _ref$el = _ref.el;
  var el = _ref$el === undefined ? required("el") : _ref$el;
  var _ref$width = _ref.width;
  var width = _ref$width === undefined ? 200 : _ref$width;
  var _ref$height = _ref.height;
  var height = _ref$height === undefined ? 30 : _ref$height;
  var _ref$color = _ref.color;
  var color = _ref$color === undefined ? "black" : _ref$color;
  var _ref$points = _ref.points;
  var points = _ref$points === undefined ? [] : _ref$points;


  d3.select(el).text(points.join("d3"));
};

function required(name) {
  throw Error("missing option: " + name);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGVyY2lzZS5qcyIsInNwYXJrbGluZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUNBQSxJQUFNLGVBQWUsUUFBUSxhQUFSLENBQXJCOztJQUVNLFM7Ozs7Ozs7Ozs7O3NDQUNjO0FBQ2hCLFdBQUssU0FBTCxHQUFpQixDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLE9BQXBCLEVBQTZCLFFBQTdCLENBQWpCO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsV0FBSyxrQkFBTDtBQUNBLFdBQUssT0FBTDtBQUNEOzs7cUNBRWdCLEksRUFBTSxRLEVBQVUsTyxFQUFTO0FBQ3hDLFdBQUssSUFBTCxJQUFhLE9BQWI7QUFDRDs7Ozs7O3lDQWVvQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNuQiw2QkFBdUIsS0FBSyxTQUE1Qiw4SEFBdUM7QUFBQSxjQUE3QixTQUE2Qjs7QUFDckMsZUFBSyxTQUFMLElBQWtCLEtBQUssWUFBTCxDQUFrQixTQUFsQixDQUFsQjtBQUNEO0FBSGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJcEI7Ozs4QkFFUztBQUNSLG1CQUFhLE1BQWIsQ0FBb0I7QUFDbEIsWUFBSSxJQURjO0FBRWxCLGVBQU8sS0FBSyxNQUZNO0FBR2xCLGdCQUFRLEtBQUssT0FISztBQUlsQixlQUFPLEtBQUssTUFKTTtBQUtsQixnQkFBUSxLQUFLO0FBTEssT0FBcEI7QUFPRDs7O3NCQTFCVSxNLEVBQVE7QUFDakIsVUFBTSxTQUFTLE9BQU8sS0FBUCxDQUFhLEdBQWIsRUFDWixHQURZLENBQ1I7QUFBQSxlQUFLLFdBQVcsQ0FBWCxDQUFMO0FBQUEsT0FEUSxDQUFmO0FBRUEsV0FBSyxPQUFMLEdBQWUsTUFBZjtBQUNEOzs7Ozt3QkFJWTtBQUNYLGFBQU8sS0FBSyxPQUFaO0FBQ0Q7Ozs7RUF6QnFCLFc7O0FBNkN4QixTQUFTLGVBQVQsQ0FBeUIsWUFBekIsRUFBdUMsU0FBdkM7Ozs7O0FDOUNBLE9BQU8sT0FBUCxDQUFlLE1BQWYsR0FBd0IsZ0JBTXJCO0FBQUEscUJBTEQsRUFLQztBQUFBLE1BTEQsRUFLQywyQkFMSSxTQUFTLElBQVQsQ0FLSjtBQUFBLHdCQUpELEtBSUM7QUFBQSxNQUpELEtBSUMsOEJBSk8sR0FJUDtBQUFBLHlCQUhELE1BR0M7QUFBQSxNQUhELE1BR0MsK0JBSFEsRUFHUjtBQUFBLHdCQUZELEtBRUM7QUFBQSxNQUZELEtBRUMsOEJBRk8sT0FFUDtBQUFBLHlCQURELE1BQ0M7QUFBQSxNQURELE1BQ0MsK0JBRFEsRUFDUjs7O0FBRUQsS0FBRyxNQUFILENBQVUsRUFBVixFQUNHLElBREgsQ0FDUSxPQUFPLElBQVAsQ0FBWSxJQUFaLENBRFI7QUFHRCxDQVhEOztBQWlCQSxTQUFTLFFBQVQsQ0FBa0IsSUFBbEIsRUFBd0I7QUFDdEIsUUFBTSwyQkFBeUIsSUFBekIsQ0FBTjtBQUNEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IHNwYXJrbGluZVZpcyA9IHJlcXVpcmUoXCIuL3NwYXJrbGluZVwiKTtcblxuY2xhc3MgU3BhcmtsaW5lIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjcmVhdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZWQgPSBbXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcImNvbG9yXCIsIFwicG9pbnRzXCJdO1xuICB9XG5cbiAgYXR0YWNoZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLl90YWtlQWxsQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX3JlbmRlcigpO1xuICB9XG5cbiAgYXR0cmlidXRlQ2hhbmdlZChuYW1lLCBwcmV2aW91cywgY3VycmVudCkge1xuICAgIHRoaXNbbmFtZV0gPSBjdXJyZW50O1xuICB9XG5cbiAgLy8gdGhpcy5wb2ludHMgPSAuLi5cbiAgc2V0IHBvaW50cyhzdHJpbmcpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBzdHJpbmcuc3BsaXQoXCIgXCIpXG4gICAgICAubWFwKHMgPT4gcGFyc2VGbG9hdChzKSk7XG4gICAgdGhpcy5fcG9pbnRzID0gdmFsdWVzO1xuICB9XG5cbiAgLy8gY29uc3QgID0gdGhpcy5wb2ludHM7XG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFyay1saW5lXCIpLnBvaW50c1xuICBnZXQgcG9pbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9wb2ludHM7XG4gIH1cblxuICBfdGFrZUFsbEF0dHJpYnV0ZXMoKSB7XG4gICAgZm9yKGNvbnN0IGF0dHJpYnV0ZSBvZiB0aGlzLl9vYnNlcnZlZCkge1xuICAgICAgdGhpc1thdHRyaWJ1dGVdID0gdGhpcy5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICB9XG4gIH1cblxuICBfcmVuZGVyKCkge1xuICAgIHNwYXJrbGluZVZpcy5yZW5kZXIoe1xuICAgICAgZWw6IHRoaXMsXG4gICAgICB3aWR0aDogdGhpcy5fd2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuX2hlaWdodCxcbiAgICAgIGNvbG9yOiB0aGlzLl9jb2xvcixcbiAgICAgIHBvaW50czogdGhpcy5fcG9pbnRzLFxuICAgIH0pXG4gIH1cbn1cblxuXG5kb2N1bWVudC5yZWdpc3RlckVsZW1lbnQoXCJzcGFyay1saW5lXCIsIFNwYXJrbGluZSk7XG4iLCJcbm1vZHVsZS5leHBvcnRzLnJlbmRlciA9IGZ1bmN0aW9uKHtcbiAgZWwgPSByZXF1aXJlZChcImVsXCIpLFxuICB3aWR0aCA9IDIwMCxcbiAgaGVpZ2h0ID0gMzAsXG4gIGNvbG9yID0gXCJibGFja1wiLFxuICBwb2ludHMgPSBbXSwgIFxufSkge1xuXG4gIGQzLnNlbGVjdChlbClcbiAgICAudGV4dChwb2ludHMuam9pbihcImQzXCIpKVxuICBcbn07XG5cblxuXG5cblxuZnVuY3Rpb24gcmVxdWlyZWQobmFtZSkge1xuICB0aHJvdyBFcnJvcihgbWlzc2luZyBvcHRpb246ICR7bmFtZX1gKTtcbn1cbiJdfQ==
