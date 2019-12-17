var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //create obj
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinker');
  //return obj
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

