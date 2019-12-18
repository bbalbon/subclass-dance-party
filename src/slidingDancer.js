var slidingDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"> <img src="http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be4e.png" height="130" width="100"></span>');
  this.$node.addClass('slider');
};

slidingDancer.prototype = Object.create(makeDancer.prototype);

slidingDancer.prototype.constructor = slidingDancer;

slidingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    left: `${Math.random() * 1500}`
  }, 2000);
  this.$node.animate({
    top: `${Math.random() * 1000}`
  }, 2000);
};

