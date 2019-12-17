//GRUB

// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  //let obj  = Object.create(makeDancer.prototype);
  //{ node, top, left, time}

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // this.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(this.step, timeBetweenSteps);
  // };
  // this.step(); // will invoke function return this.step after timeBetweenSteps

  // this.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   this.$node.css(styleSettings);
  //   //return obj;
  // };

  // this.setPosition(top, left);


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

};


makeDancer.prototype.step = function() {
  console.log('old step: ', this.step);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);   //missing something here.  check out the slides on bind,
};

makeDancer.prototype.setPostion = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};