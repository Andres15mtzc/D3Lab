/*
*    main.js
*/
var data = [25, 20, 15, 10, 5];

var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);

var data_rectangles = svg.selectAll("rect")
    .data(data)

    data_rectangles.enter()
    .append("rect")
        .attr("x", (d,i) => { return i * 60 + 20})
        .attr("y", (d,i) => { return i * 5 + 20})
        .attr("width", 40)
        .attr("height", (d) =>{ return d; })
        .attr("fill","red");