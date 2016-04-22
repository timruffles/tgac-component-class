const d3 = require("d3");

module.exports.render = function({
  el = required("el"),
  width = 200,
  height = 30,
  color = "black",
  points = [],  
}) {
  // TODO remove stub
  points = [{x:10, y: 20}, {x:20, y: 25}, {x: 80, y: 95}];

  // function makeLine(points: Array<{x: number, y: number}>): svgPathString {}
  const makeLine = d3.svg.line()
    .x(({x}) => x)
    .y(({y}) => y)
  

  const update = d3.select(el)
    .selectAll("svg")
    .data([points])

  update.enter()
    .append("svg")
    .append("path")

  // update + enter
  update.select("svg")
        .attr({ width: width, height })
  
  update.select("path")
        .attr("d", makeLine)
        .attr({
          fill: "none",
          stroke: color,
        })


};





function required(name) {
  throw Error(`missing option: ${name}`);
}
