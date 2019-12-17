var greenDot = function(top, left, timeBetweenSteps) {
  greenDot.call(this, top, left, timeBetweenSteps);
}

greenDot.prototype = Object.create(makeDancer.prototype);

greenDot.prototype.constructor = greenDot;
