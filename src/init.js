$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUp').on('click', function(event) {
    let left = 20;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(100, left);
      left += (2000 / (window.dancers.length));
    }
  });

  function lineUp(input) {
    let top = input[0].top;
    let left = input[0].left;
    for (var i = 0; i < input.length; i++) {
      input[i].$node.animate({
        left: `${500}`
      }, 2000);
      input[i].setPosition(top, input[0].left);
      top += 20;
    }
  }

  $('.checkOtherNodes').on('click', function(event) {
    const leaderIndex = Math.floor(Math.random() * window.dancers.length);
    console.log(window.dancers[leaderIndex]);
    const leader = window.dancers[leaderIndex];
    let resultArr = [leader];

    for (var i = 1; i < window.dancers.length; i++) {
      if (i === leaderIndex) {
        continue;
      }
      let currentDancer = window.dancers[i];
      let hyp = Math.sqrt(((leader.left - currentDancer.left) ** 2  + (leader.top - currentDancer.top) ** 2));
      if (hyp <= 500) {
        resultArr.push(currentDancer)
      }
    }
    lineUp(resultArr);
  });

  $('.dancer').on('mouseover', function(event){
    console.log('YOUVE TOUCHED ME');
  })

});

