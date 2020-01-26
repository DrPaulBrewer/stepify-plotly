# stepify-plotly

[![Greenkeeper badge](https://badges.greenkeeper.io/DrPaulBrewer/stepify-plotly.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/DrPaulBrewer/stepify-plotly.svg?branch=master)](https://travis-ci.org/DrPaulBrewer/stepify-plotly)

As of July 2016 this is useful to convert line charts into step charts in Plotly[tm].

## Problem

You have this data:

    x = [1,2,3,4,5];
    y = [2,4,6,8,10];

but you want a stairstep plot:

<pre> 
 |          ___
 |          |
 |      ____|
 |      |    
 |   ___|
 |   |
 |___|
 |______________
</pre>

not the straight line that `Plotly.newPlot('outdiv',{x:x, y:y, mode:'line', type:'scatter'},{})` produces

## Staircase Plot Solution

Alters the x and y data to produce a staircase effect.  It makes a copy first with `Array.slice()` so as not to pollute the original array.

    var stepify = require('stepify-plotly');
    var trace = {x:x, y:y, mode:'lines', type:'scatter', steps:1};  
    // stepify looks for steps:1, alters the data, deletes steps:1
    Plotly.newPlot('outdiv', stepify(trace), {});

## Safe for regular line plots too

If `trace.steps` is falsy, it is deleted and the plot data is unaltered.  

If `trace.steps` is absent, trace is passed unaltered.

## Copyright

Copyright 2016 Paul Brewer, Economic and Financial Technology Consulting LLC

## License

[The MIT License](LICENSE.md)

### Trademarks

  * Plotly[tm] is a trademark of [Plotly, Inc.](http:/www.plotly.com)
 
  * `stepify-plotly` is not an official product of Plotly, Inc., but our 3rd party open source contribution.  

  * `stepify-plotly` is not part of a similarly named npm project called `stepify`, whatever that may be.
