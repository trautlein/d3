var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

// Width and height
var w = 500;
var h = 100;
var barPadding = 1;

var svg = d3.select('body')
            .append('svg')
            .attr('width', w)
            .attr('height', h);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * (w / dataset.length))
  .attr("y", d => h - (d * 4))
  .attr("width", w / dataset.length - barPadding)
  .attr("height", d => d * 4)
  .attr('fill', d => "rgb(0, 0, " + (d * 10) + ")")
  .text(d => d)

svg.selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .text(d => d)
  .attr('x', (d, i) => {
    return i * (w / dataset.length) + 5;
  })
  .attr('y', d => {
    return h - (d * 4) + 15;
  })
  .attr('font-family', 'sans-serif')
  .attr('font-size', '11px')
  .attr('fill', 'white')
  .attr('text-anchor', 'middle')
  .attr('x', (d, i) => {
    const temp = w / dataset.length;
    return i * temp + (temp - barPadding) / 2;
  })
  .attr('y', d => h - (d * 4) + 14);

