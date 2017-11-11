//define row and col as global variables
var row;
var col;
//define makeGrid
function makeGrid() {
  let canvas = document.getElementById("pixel_canvas");
  canvas.innerHTML = ""; //sets canvas string to empty at the start of the function
  height = document.getElementById("input_height").value;
  width = document.getElementById("input_width").value;
  for (var h = 0; h < height; h++) { //iterates of inputs height and width to build canvas
    var grid = canvas.insertRow(h);
    for (var w = 0; w < width; w++) {
      var cell = grid.insertCell(w);
      //Event listner to change color of targeted cells
      cell.addEventListener('click', function (evt) {
        evt.target.style.backgroundColor = document.getElementById("colorPicker").value;
      });
    }
  }
};
//event listner to run makeGrid
document.getElementById("sizePicker").addEventListener("submit", function (evt) {
  evt.preventDefault();
  makeGrid();
});