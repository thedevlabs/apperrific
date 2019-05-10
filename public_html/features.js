//for debugging
console.log('Im in your console. Inspect Element > Console.');

function changeColor(newColor) {
  var elem = document.getElementById('start_sections');
  elem.style.color = newColor;

  console.log(elem);
}

