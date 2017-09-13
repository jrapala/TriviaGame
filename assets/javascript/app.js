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

		// Variables 
		// =====================================================================================

		remainingTime : 30,
		questions : [
				{
					question: "What was Britney Spears' first hit single?",
					choices : ["Sometimes", "Baby One More Time", "You Drive Me Crazy", "Toxic"],
					answer : 1
				},
				{
					question: "Which basketball player was in Space Jam?",
					choices : ["Michael Jordan", "Tim Hardaway", "Scottie Pippen", "Dennis Rodman"],
					answer : 0
				},
				{
					question: "Mr. Feeny was the teacher in which popular TV show?",
					choices : ["Fresh Prince of Bel-Air", "Saved by the Bell", "Beverly Hills 90210", "Boy Meets World"],
					answer : 3
				},
				{
					question: "What was Tommy's last name in Rugrats?",
					choices : ["Pickles", "Finster", "DeVille", "Radishes"],
					answer : 0
				},
				{
					question: "Who wrote the book series 'Goosebumps'?",
					choices : ["Lois Lowry", "Stephen King", "R.L. Stine", "Dav Pilkey"],
					answer : 2
				},
				{
					question: "What was the original flavor of Dunkaroos?",
					choices : ["Chocolate", "Vanilla", "Cinnamon", "Peanut Butter"],
					answer : 2
				},
				{
					question: "*NSYNC consisted of Justin Timberlake, Lance Bass, JC Chasez, Joey Fatone, and ______?",
					choices : ["Brian Litrell", "Chris Kirkpatrick", "Joey McIntyre", "Jeff Timmons"],
					answer : 1
				},
				{
					question: "What was the boy's name in Pokemon?",
					choices : ["Poli", "Kai", "Onix", "Ash"],
					answer : 3
				}
		],

		// Functions
		// =====================================================================================

		// Load game after start button has been clicked.
		start : function() {
			var self = this;
			$('#start').on('click', function() {
				$(this).hide();
				self.tick();
				//$('#timer').html("Time Remaining: " + self.tick + " Seconds");
				self.loadQuestions();
			});
		},

		tick : function() {
			setInterval(this.countdown(), 1000)
		},
		
		countdown : function() {
			var currentSecond = this.remainingTime - 1;
			$('#timer').html("Time Remaining: " + currentSecond + " Seconds");
		},

		// Populate questions
		loadQuestions : function() {
			for (var i = 0; i < this.questions.length; i++) {
				// Create question div
      			var $questionDiv = $('<div>');
      			// Apply question class
      			$questionDiv.addClass("question");
      			// Insert question from questions object
      			$questionDiv.text(this.questions[i].question);
      			// Create answers div
      			var $answersDiv = $('<div>');
      			// Add answers class.
      			$answersDiv.addClass("answers");
      			// Create answers form
      			var $answersForm = $('<form>');
      			// Create answers form div
      			var $answersFormDiv = $('<div>');


      			// Loop through answers
      			//var self = this;
      			for (var j = 0; j < this.questions[i].choices.length; j++) {
      				// Create answer input & label
      				var $answer = $("<input>");
      				var $label = $("<label>");
      				// Apply attribute
      				$answer.attr("type", "radio");
      				$answer.attr("name", "question" + i);
      				// Insert answer from questions object
      				$label.text(this.questions[i].choices[j]);
      				// Add to div
      				$answersFormDiv.append($answer);
      				$answersFormDiv.append($label);
      			};

      			// Append answers form
      			$answersForm.append($answersFormDiv);

      			// Append answers class
      			$answersDiv.append($answersForm);

				// Add div to #questions div
      			$('#questions').append($questionDiv);

      			// Append answers class
      			$('#questions').append($answersDiv);

      			// <div class="question">
      			// <div class="answers">
      			//		<form>
      			//			<div>
      			//				<input type="radio">
      			//				<label>Male
      			//				<input type="radio">
      			//				<label>Female
      			//			</div>
      			//		</form>
      			// </div>
      		}
      	},	

	};

	// Gameplay
	// =====================================================================================

	triviaApp.start();
	

});



////









