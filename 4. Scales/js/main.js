/*
*    main.js
*/

const svg = d3.select("#chart-area").append("svg")
    .attr('width', 500)
    .attr('height', 500);
  
d3.json('data/buildings.json').then((data) => {
  const buildings_list = data.map((d) => +d.height);

  var x = d3.scaleBand()
    .domain(buildings_list)
    .range([0, 400])
    .paddingInner(0.3)
    .paddingOuter(0.3);

  var y = d3.scaleLinear()
    .domain([0, 828])
    .range([0, 400]);

  var color = d3.scaleOrdinal()
    .domain(buildings_list)
    .range(d3.schemeSet3);

  var rectangles = svg.selectAll('rect')
    .data(buildings_list)
    .enter()
    .append('rect')
    .attr('x', (d) => x(d))
    .attr('y', (d) => 400 - y(d))
    .attr('width', 30)
    .attr('height', (d) => y(d))
    .attr('fill', (d) => color(d));
}).catch((error) => {
  console.log(error);
});
  