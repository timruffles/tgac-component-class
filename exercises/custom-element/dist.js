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
      this.innerHTML = this.points.join(", ");
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGVyY2lzZS5qcyIsInNwYXJrbGluZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUNBQSxJQUFNLGVBQWUsUUFBUSxhQUFSLENBQXJCOztJQUVNLFM7Ozs7Ozs7Ozs7O3NDQUNjO0FBQ2hCLFdBQUssU0FBTCxHQUFpQixDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLE9BQXBCLEVBQTZCLFFBQTdCLENBQWpCO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsV0FBSyxrQkFBTDtBQUNBLFdBQUssT0FBTDtBQUNEOzs7cUNBRWdCLEksRUFBTSxRLEVBQVUsTyxFQUFTO0FBQ3hDLFdBQUssSUFBTCxJQUFhLE9BQWI7QUFDRDs7Ozs7O3lDQWVvQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNuQiw2QkFBdUIsS0FBSyxTQUE1Qiw4SEFBdUM7QUFBQSxjQUE3QixTQUE2Qjs7QUFDckMsZUFBSyxTQUFMLElBQWtCLEtBQUssWUFBTCxDQUFrQixTQUFsQixDQUFsQjtBQUNEO0FBSGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJcEI7Ozs4QkFFUztBQUNSLFdBQUssU0FBTCxHQUFpQixLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBQWpCO0FBQ0Q7OztzQkFwQlUsTSxFQUFRO0FBQ2pCLFVBQU0sU0FBUyxPQUFPLEtBQVAsQ0FBYSxHQUFiLEVBQ1osR0FEWSxDQUNSO0FBQUEsZUFBSyxXQUFXLENBQVgsQ0FBTDtBQUFBLE9BRFEsQ0FBZjtBQUVBLFdBQUssT0FBTCxHQUFlLE1BQWY7QUFDRDs7Ozs7d0JBSVk7QUFDWCxhQUFPLEtBQUssT0FBWjtBQUNEOzs7O0VBekJxQixXOztBQXVDeEIsU0FBUyxlQUFULENBQXlCLFlBQXpCLEVBQXVDLFNBQXZDOzs7QUN6Q0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBzcGFya2xpbmVWaXMgPSByZXF1aXJlKFwiLi9zcGFya2xpbmVcIik7XG5cbmNsYXNzIFNwYXJrbGluZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuX29ic2VydmVkID0gW1wid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJjb2xvclwiLCBcInBvaW50c1wiXTtcbiAgfVxuXG4gIGF0dGFjaGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5fdGFrZUFsbEF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9yZW5kZXIoKTtcbiAgfVxuXG4gIGF0dHJpYnV0ZUNoYW5nZWQobmFtZSwgcHJldmlvdXMsIGN1cnJlbnQpIHtcbiAgICB0aGlzW25hbWVdID0gY3VycmVudDtcbiAgfVxuXG4gIC8vIHRoaXMucG9pbnRzID0gLi4uXG4gIHNldCBwb2ludHMoc3RyaW5nKSB7XG4gICAgY29uc3QgdmFsdWVzID0gc3RyaW5nLnNwbGl0KFwiIFwiKVxuICAgICAgLm1hcChzID0+IHBhcnNlRmxvYXQocykpO1xuICAgIHRoaXMuX3BvaW50cyA9IHZhbHVlcztcbiAgfVxuXG4gIC8vIGNvbnN0ICA9IHRoaXMucG9pbnRzO1xuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3BhcmstbGluZVwiKS5wb2ludHNcbiAgZ2V0IHBvaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9pbnRzO1xuICB9XG5cbiAgX3Rha2VBbGxBdHRyaWJ1dGVzKCkge1xuICAgIGZvcihjb25zdCBhdHRyaWJ1dGUgb2YgdGhpcy5fb2JzZXJ2ZWQpIHtcbiAgICAgIHRoaXNbYXR0cmlidXRlXSA9IHRoaXMuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgfVxuICB9XG5cbiAgX3JlbmRlcigpIHtcbiAgICB0aGlzLmlubmVySFRNTCA9IHRoaXMucG9pbnRzLmpvaW4oXCIsIFwiKTtcbiAgfVxufVxuXG5cbmRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudChcInNwYXJrLWxpbmVcIiwgU3BhcmtsaW5lKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKemNHRnlhMnhwYm1VdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXMTE5Il19
