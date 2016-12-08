var data = [4, 8, 15, 16, 23, 42];

d3.select('body')
  .selectAll('div')
    .data(data)
  .enter().append('div')
  .style('width', d => d * 10 + 'px')
  .text(d => d);


