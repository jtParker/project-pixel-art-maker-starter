$(document).ready(function() {

  // Select color input

  $('#pixelCanvas').click(function( e ) {
    var color = $('#colorPicker').val();
    var target = $( e.target );
    $(target).css('background-color', color);
  })

  // Select size inputWidth
  var height;
  var width;

  $(':submit').click(function(e) {
    e.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
  })

  // When size is submitted by the user, call makeGrid()

  function makeGrid(height, width) {
    var grid;
    var cells = '<td></td>'.repeat(width);
    for (let r = 0; r < height; r++ ) {
      grid += '<tr>' + cells + '</tr>';
    }
    $('#pixelCanvas').append(grid);
  };

})
