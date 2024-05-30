/*
*    main.js
*/


var data_list = [];

d3.json("data/buildings.json").then((data)=> {
	data.forEach((d, i)=>{
		d.height = +d.height;
        data_list.push(d.height)
	});

    var svg = d3.select("#chart-area").append("svg")
	.attr("width", 900)
	.attr("height", 900);

    var rects = svg.selectAll("rect")
        .data(data_list);

    rects.enter()
        .append("rect")
            .attr("x", (d,i) => { return i * 35})
            .attr("y", (d) =>{
                var y = 900 - d;
                return y;
            })
            .attr("width", 30)
            .attr("height", (d) =>{ return d; })
            .attr("fill","red");
    }).catch((error) => {
        console.log(error);
    });