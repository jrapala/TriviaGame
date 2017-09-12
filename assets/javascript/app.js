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
		questions : [
				{
					question: "What was Britney Spears' first hit single?",
					choices : ["Baby One More Time", "Sometimes", "You Drive Me Crazy", "Toxic"],
					answer : 0
				},
				{
					question: "Which basketball player was in Space Jam?",
					choices : ["Michael Jordan", "Tim Hardaway", "Scottie Pippen", "Dennis Rodman"],
					answer : 0
				},
				{
					question: "Mr. Feeny was the teacher in which popular TV show?",
					choices : ["Boy Meets World", "Fresh Prince of Bel-Air", "Saved by the Bell", "Beverly Hills 90210"],
					answer : 0
				},
				{
					question: "What was Tommy's last name in Rugrats?",
					choices : ["Pickles", "Finster", "DeVille", "Radishes"],
					answer : 0
				},
				{
					question: "Who wrote the book series 'Goosebumps'?",
					choices : ["R.L. Stine", "Lois Lowry", "Stephen King", "Dav Pilkey"],
					answer : 0
				},
				{
					question: "What was the original flavor of Dunkaroos?",
					choices : ["Cinnamon", "Chocolate", "Vanilla", "Peanut Butter"],
					answer : 0
				},
				{
					question: "*NSYNC consisted of Justin Timberlake, Lance Bass, JC Chasez, Joey Fatone, and ______?",
					choices : ["Chris Kirkpatrick", "Brian Litrell", "Joey McIntyre", "Jeff Timmons"],
					answer : 0
				},
				{
					question: "What was the boy's name in Pokemon?",
					choices : ["Ash", "Poli", "Kai", "Onix"],
					answer : 0
				}
		],
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



