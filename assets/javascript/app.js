// JavaScript: Trivia Game | By Juliette Rapala
// =====================================================================================
//
// To Do:
//
//
//
//

$(document).ready(function(){

	var triviaApp = {

		remainingTime : 30,
		tick : setInterval(this.countdown, 1000),

		// Load game after start button has been clicked.
		start : function() {
			$('#start').on('click', function() {
				$(this).hide();
				$('#timer').html("Time Remaining: " + this.tick + " Seconds");
			});
		},

		countdown : function (){
			this.remainingTime--;
			}
		
	};

	triviaApp.start();

});



////





	// Variables 
	// =====================================================================================


	// Functions
	// =====================================================================================	


	// Gameplay
	// =====================================================================================



