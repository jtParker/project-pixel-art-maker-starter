$(document).ready(function() {

    let height, width, color, grid;

    $('.color-palette').click(function(e) {
      let selection = $( e.target );
      color = $(selection).val();
    });

    $('#color-select').change(function() {
      color = $('#color-select').val();
    });

    $('#pixelCanvas').click(function(e) {
      let target = $( e.target );
      $(target).css('background-color', color);
    });

    $('.grid-btn').click(function(e) {
      e.preventDefault();
      height = $('#inputHeight').val();
      width = $('#inputWidth').val();
      if (width > 50) {
        alert("Maximum width is 50");
        return;
      } else {
          makeGrid(height, width);
          // $('html, body').animate({ scrollTop: $('.color-picker').offset().top}, 1000);
          $('.grid-size').hide('slow', function() {
            $('.art-space').show('slow');
          });
      }
    });

    $('.clear').click(function() {
      $('td').css('background-color', '#fff');
    });

    $('.new').click( function() {
      $('.pixelCanvas').empty();
      $('.art-space').hide('slow', function() {
        $('.grid-size').show('slow');
      })
    });

    $('#pixelCanvas').contextmenu(function(e) {
      let target = $(e.target);
      $(target).css('background-color', '#fff');
    });

    function makeGrid(height, width) {
      let cells = '<td></td>'.repeat(width);
      for (let r = 0; r < height; r++ ) {
        grid += '<tr>' + cells + '</tr>';
      }
      $('#pixelCanvas').append(grid);
    }
});
