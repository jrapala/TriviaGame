// JavaScript: Trivia Game | By Juliette Rapala
// =====================================================================================
//
// To Do:
//
//
//
//


$(document).ready(function(){

	var timer = {

		remaningTime : 30,
		tick : setInterval(this.countdown, 1000),

		countdown : function (){
			this.remaningTime--;
			$('#timer').html(this.remaningTime);
			},
		
		}


	$('#timer').html(timer.remaningTime);
	console.log(timer.tick);





////





	// Variables 
	// =====================================================================================


	// Functions
	// =====================================================================================	


	// Gameplay
	// =====================================================================================


});
