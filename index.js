var w = 700;
var h = 700;

const sub = ds.slice(0, 10);

var svg = d3.select('body')
            .append('svg')
            .attr('width', w)
            .attr('height', h);

svg.selectAll('rect')
  .data(ds)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * (w / ds.length))
  .attr('y', d => h - (d.rank * 4))
  .attr('width', w / ds.length)
  .attr('height', d => d.rank)
  .text(d => d);

