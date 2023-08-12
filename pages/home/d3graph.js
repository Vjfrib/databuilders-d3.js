// script.js
function createCircle() {
  const svg = d3.select("body")
    .append("svg")
    .attr("width", 200)
    .attr("height", 200);

  svg.append("circle")
    .attr("cx", 100)
    .attr("cy", 100)
    .attr("r", 50)
    .attr("fill", "blue");
}

createCircle(); // Chame a função para criar o círculo
