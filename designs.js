// Select color input
var color = document.getElementById('colorPicker').value;
// Select size input
var height = document.getElementById('input_height').value;
var width = document.getElementById('input_width').value;
// When size is submitted by the user, call makeGrid()
document.getElementByIdfunction("sizePicker").addEventListner("submit"), function(){
    makeGrid(height, width) {
    var pixelCanvas = document.getElementById('pixel_canvas');
// Your code goes here!
var grid = ''; //starts string that will be canvas
for (var h = 0; h < height; h++){
  grid += '<tr>';
    function makeGrid() {
    for (var w = 0; w < width; w++){
        grid += '<td></td>';
      }
      grid += '</tr>';
    }
    pixelCanvas.innerHTML = grid; //adds newly created grid to html pixel_canvas element

}
}
}
//Add Event Listners