var assert = require('assert');
require('should');
var stepify = require('../index.js');
var clone = require('clone');

var xdata = [1,3,5,7,11,13]; // 6 elements
var ydata = [1,2,3,5,8,13];  // 6 elements

var z = 1.0-Number.EPSILON;

var step_xdata = [1,3*z,3,5*z,5,7*z,7,11*z,11,13*z,13]; // 11 elements = 2*6-1
var step_ydata = [1,1,2,2,3,3,5,5,8,8,13]; // 11 elements = 2*6-1

var lineTrace = {
    name: "line plot",
    x: xdata,
    y: ydata,
};

var lineTraceStepFalse = Object.assign({}, clone(lineTrace), {steps:false});
var lineTraceStepTrue  = Object.assign({}, clone(lineTrace), {steps:true});

describe('stepify-plotly', function(){
    it('should be a function', function(){
	stepify.should.be.type('function');
    });

    it('should passthru a trace without .steps set', function(){
	stepify(lineTrace).should.deepEqual(clone(lineTrace));
    });

    it('should delete .step from a trace with .steps set false and passthru other settings', function(){
	assert(typeof(stepify(lineTraceStepTrue).steps)==='undefined');
	stepify(lineTraceStepFalse).should.deepEqual(clone(lineTrace));
    });

    it('should delete .step from a trace with .steps set true', function(){
	assert(typeof(stepify(lineTraceStepTrue).steps)==='undefined');
    });

    it('when .step is true, should duplicate and adjust trace.x,trace.y arraysproperly to form stair steps', function(){
	var result = stepify(lineTraceStepTrue);
	assert.ok(result.x!==lineTraceStepTrue.x);
	assert.ok(result.y!==lineTraceStepTrue.y);
	result.x.should.deepEqual(step_xdata);
	result.y.should.deepEqual(step_ydata);
    });
});

	

    
