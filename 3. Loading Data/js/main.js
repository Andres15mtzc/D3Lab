/*
*    main.js
*/

d3.csv("data/ages.csv").then((data)=> {
	console.log(data);
});

d3.tsv("data/ages.tsv").then((data)=> {
	console.log(data);
});

d3.json("data/ages.json").then((data)=> {
	console.log(data);
});

var dataArr = [];

d3.json("data/ages.json").then((data)=> {
	data.forEach((d, i)=>{
		d.age = +d.age;
        dataArr.push(d.age)
	});
	console.log(data);
    console.log(dataArr);

    var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);

    console.log(dataArr);
    var circles = svg.selectAll("circle")
        .data(dataArr);

    circles.enter()
        .append("circle")
            .attr("cx", (d,i) => { return (i * 50) + 25})
            .attr("cy", 250)
            .attr("r", (d) => { return d; })
            .attr("fill",(d) => { 
                if(d <= 10){
                    return ("blue");
                } else {
                    return ("green");
                }
            });
    }).catch((error) => {
        console.log(error);
    });