stepify-plotly
==================

As of July 2016 this was useful to convert line charts into step charts in Plotly[tm].

##Problem

You have this data:

    x = [1,2,3,4,5];
    y = [2,4,6,8,10];

but you want a stairstep plot:

<pre>       ___
 |          |
 |      ____|
 |      |    
 |   ___|
 |   |
 |___|
 |______________
</pre>

not the straight line that `Plotly.newPlot('outdiv',{x:x, y:y, mode:'line', type:'scatter'},{})` produces

##Staircase Plot Solution

Alters the x and y data to produce a staircase effect.  It makes a copy first with `Array.slice()` so as not to pollute the original array.

    var stepify = require('stepify-plotly');
    var trace = {x:x, y:y, mode:'lines', type:'scatter', steps:1};  // stepify looks for steps:1, alters the data, deletes steps:1
    Plotly.newPlot('outdiv', stepify(trace), {});

##Safe for regular line plots too

If `trace.step` is falsy, it is deleted and the plot data is unaltered.  If `trace.step` is absent, trace is passed unaltered.

###Trademarks

For the avoidance of doubt:

  * Plotly[tm] is a trademark of [Plotly, Inc.](http:/www.plotly.com)
 
  * `step-charts-plotly` is not an official product of Plotly, Inc., but our 3rd party open source contribution.