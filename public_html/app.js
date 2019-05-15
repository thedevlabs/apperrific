//for debugging
console.log('Im in your console. Inspect Element > Console.');

//wait for HTML to finish downloading
document.addEventListener("DOMContentLoaded", function(){

  // Grab the intro element and add some simple text dynamically
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
  var introElem = document.getElementById('intro');

  function changeColor(newColor) {
    var elem = document.getElementById('intro');
    elem.style.color = newColor;
  }

  // Put some text in there
	introElem.textContent = "Hi. I'm in here. ";
  introElem.textContent += "This just got added. ";
  introElem.textContent += "Added something else.";

  //debug out to the console
  console.log(introElem);

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