var clone = require('clone');

module.exports = function(trace){
    var i, l, xin, yin, xout=[], yout=[], T;
    if (typeof(trace.steps)!=='undefined'){
	if (trace.steps && trace.x && trace.y && trace.x.length && trace.y.length ){
	    T = clone(trace);
	    xin = T.x.slice(0);
	    yin = T.y.slice(0);
	    xout = [xin[0]];
	    for(i=1,l=xin.length;i<l;++i)
		xout.push(xin[i]*(1.0-Number.EPSILON),xin[i]);
	    for(i=0,l=yin.length-1;i<l;++i)
		yout.push(yin[i],yin[i]);
	    yout.push(yin[yin.length-1]);
	    T.x = xout;
	    T.y = yout;
	    delete T.steps;
	    return T;
	}
	delete trace.steps;
    }
    return trace;
};
	    
