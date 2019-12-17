var slidingDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('slider');
};

slidingDancer.prototype = Object.create(makeDancer.prototype);

slidingDancer.prototype.constructor = slidingDancer;

slidingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    left: `${Math.random() * 500}`
  }, 2000);
};

