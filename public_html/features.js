//for debugging
console.log('Im in your console. Inspect Element > Console.');

//wait for HTML to finish downloading
document.addEventListener("DOMContentLoaded", function(){

  // Grab the UL element and count the number of LI nodes
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
  var listElem = document.getElementById("navigation").getElementsByTagName("li");

  //debug out to the console
  console.log(listElem.length);

  // Put some text in there
  var statsElem = document.getElementById("stats");
	statsElem.textContent = "There are " + listElem.length + " Places to explore.";

  //
  //  Run the function below that will multiple this the LI of places by 10 and display it at the H1 element
  //

  // Grab the Tag Name
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName

  // Display the new headline
  //

});

function increaseNumber(variable1) {
  return variable1 * 10;
}