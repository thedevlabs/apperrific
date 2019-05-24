//for debugging
console.log('Im in your console. Inspect Element > Console.');

//wait for HTML to finish downloading
document.addEventListener("DOMContentLoaded", function(){

  // Grab the UL element and count the number of LI nodes
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
  var listElem = document.getElementById("navigation").getElementsByTagName("li");
  listElem[0].textContent="Best Time to Visit";
  
  //debug out to the console
  console.log(listElem.length);

  // Put some text in there
  var statsElem = document.getElementById("stats");
	//statsElem.textContent = "There are " + listElem.length + " Places to explore.";

  //
  //  Run the function below that will multiple this the LI of places by 10 and display it at the H1 element
    var outputOfIncreaseNumber=increaseNumber(listElem.length);
    console.log(outputOfIncreaseNumber);

  // Grab the Tag Name
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
  var h1Element = document.getElementsByTagName("h1");
  // Display the new headline
  //h1Element[0].textContent=increaseNumber(listElem.length);

});

function increaseNumber(variable1) {
  return variable1 * 10;
}
