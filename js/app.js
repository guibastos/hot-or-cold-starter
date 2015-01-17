
$(document).ready(function(){
	
  /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

  /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

  /*--- New code - exercise ---*/

  var random_number = Math.round(Math.random()*100);
  console.log(random_number);
  var count = 0;
  $("#guessButton").on('click',function(event){
    event.preventDefault();
    var input_number = $('#userGuess').val();
    if(input_number<0 || input_number>100 || isNaN(input_number)){
      alert('Please enter a valid number');
      $('#userGuess').val('');  
    } else {
      addCounter();
      NewGame();
    }

  });

  function addCounter() {
    count +=1;
    $("#count").html(count);
  }

  function NewGame() {
    var input_number = $('#userGuess').val();
    $('#guessList').append("<li>"+input_number+"</li>");
    var difference = Math.abs(random_number - input_number);
      if (difference >= 50) {
        $('#feedback').html("Ice cold");
      } else if (difference >=30) {
        $('#feedback').html("Cold!");
      } else if (difference >=20) {
        $('#feedback').html("Warm!");
      } else if (difference >=10) {
        $('#feedback').html("Hot!");
      } else if (difference >0) {
        $('#feedback').html("Very hot!");
      } else if (difference ===0) {
        $('#feedback').html("You got it!");
      } else {
        $('#feedback').html("Error!");
      }
      $('#userGuess').val('');
      };

  $('.new').on('click',function(){
    location.reload(true);
  });



});
