var fadingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('fader');
};

fadingDancer.prototype = Object.create(makeDancer.prototype);

fadingDancer.prototype.constructor = fadingDancer;

fadingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.fadeToggle();
};
