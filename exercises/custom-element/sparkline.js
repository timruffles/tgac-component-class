const d3 = require("d3");

module.exports.render = function({
  el = required("el"),
  width = 200,
  height = 30,
  color = "black",
  points = [],  
}) {

  d3.select(el)
    .text(points.join("d3"))
  
};





function required(name) {
  throw Error(`missing option: ${name}`);
}
