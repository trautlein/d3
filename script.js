var dataset = [5, 10, 15, 20, 25];

var svg = d3.select('body').append('svg');

var circles = svg.selectAll('circle')
                 .data(dataset)
                 .enter()
                 .append('circle');

circles.attr('cx', (d, i) => i * 50 + 25)
       .attr('cy', 25)
       .attr('r', d => d);

