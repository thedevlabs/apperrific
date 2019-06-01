//for debugging
console.log('Im in your console. Inspect Element > Console.');
$(document).ready(function () {
  //for debugging
  console.log('DOM loaded!. Inspect Element > Console.');

//wait for HTML to finish downloading
document.addEventListener("DOMContentLoaded", function(){
  // 1) use an Effect
  // https://learn.jquery.com/effects/intro-to-effects/
    // Hide or Show
  // https://www.w3schools.com/jquery/jquery_hide_show.asp


  // Grab the intro element and add some simple text dynamically
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
  var introElem = document.getElementById('intro');
  // 2) Dynamically set CSS using JQuery
  // https://learn.jquery.com/using-jquery-core/css-styling-dimensions/


  // Put some text in there
	introElem.textContent = "Hi. I'm in here. ";
  introElem.textContent += "This just got added. ";
  introElem.textContent += "Added something else.";

  //debug out to the console
  console.log(introElem);
// Code Academy intro to JQuery
  // https://www.codecademy.com/learn/learn-jquery

  //
  //  Run the function below that will detect mousemovements in the Navigation area
  //
  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover

  const n = document.querySelector('nav');
  n.onmouseover = logMouseOver;
  n.onmouseout = logMouseOut;

});

function logMouseOver() {
  var m = document.getElementById('mousy');
  m.innerHTML = 'MOUSE OVER detected';
}

function logMouseOut() {
  var m = document.getElementById('mousy');
  m.innerHTML = 'MOUSE OUT detected';
}
}); 