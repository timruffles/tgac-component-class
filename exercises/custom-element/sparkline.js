const d3 = require("d3");

module.exports.render = function({
  el = required("el"),
  width = 200,
  height = 30,
  color = "black",
  points = [],  
}) {


  const X_PADDING = 2;

  const xScale = d3.scale.linear()
    .range([X_PADDING, width - X_PADDING])
    .domain(d3.extent(points, (d) => d.x))

  const yScale = d3.scale.linear()
    .range([height - 2, 2])
    .domain(d3.extent(points, (d) => d.y))

  // function makeLine(points: Array<{x: number, y: number}>): svgPathString {}
  const makeLine = d3.svg.line()
    .x((d) => xScale(d.x))
    .y(function(point) {
      return yScale(point.y);
    });

  const lines = [
    points
  ];

  const update = d3.select(el)
    .selectAll("svg")
    .data(lines)

  update.enter()
    .append("svg")
    .append("path")

    
  // update + enter
  update
    .attr("width", width + "px")  
    .attr("height", height + "px")  

  update.select("path")
        .attr("d", makeLine)
        .attr({
          fill: "none",
          stroke: color,
        })

  const updatePoint = d3.select(el)
    .select("svg")
    .selectAll("circle")
    .data(points)

  const enterPoint = updatePoint
    .enter()
    .append("circle")
    .attr("r", width / 50)
    .attr("fill", "red")

  updatePoint.attr("cx", (d) => xScale(d.x))
             .attr("cy", (d) => yScale(d.y))
             .attr("title", (d) => {
               return "you clicked: " + JSON.stringify(d);
             })
             .on("click", (d) => {
               alert("you clicked: " + JSON.stringify(d));
             })
        
};





function required(name) {
  throw Error(`missing option: ${name}`);
}
