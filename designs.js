//define row and col as global variables
var row;
var col;
//define makeGrid
function makeGrid() {
  let canvas = document.getElementById("pixel_canvas");
  canvas.innerHTML = ""; //sets canvas string to empty at the start of the function
  row = document.getElementById("input_height").value;
  col = document.getElementById("input_width").value;
  for (var i = 0; i < row; i++) { //iterates of inputs height and width to build canvas
    var grid = canvas.insertRow(i);
    for (var j = 0; j < col; j++) {
      var cell = grid.insertCell(j);
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