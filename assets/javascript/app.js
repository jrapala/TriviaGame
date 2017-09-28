// JavaScript: Trivia Game | By Juliette Rapala
// =====================================================================================


$(document).ready(function(){

	var triviaApp = {

		// Variables 
		// =====================================================================================

		questions : [
      {
       question: "What was Britney Spears' first hit single?",
       choices : ["Sometimes", "Baby One More Time", "You Drive Me Crazy", "Toxic"],
       answer : "B"
     },
     {
       question: "Which basketball player was in Space Jam?",
       choices : ["Michael Jordan", "Tim Hardaway", "Scottie Pippen", "Dennis Rodman"],
       answer : "A"
     },
     {
       question: "Mr. Feeny was the teacher in which popular TV show?",
       choices : ["Fresh Prince of Bel-Air", "Saved by the Bell", "Beverly Hills 90210", "Boy Meets World"],
       answer : "D"
     },
     {
       question: "What was Tommy's last name in Rugrats?",
       choices : ["Pickles", "Finster", "DeVille", "Radishes"],
       answer : "A"
     },
     {
       question: "Who wrote the book series 'Goosebumps'?",
       choices : ["Lois Lowry", "Stephen King", "R.L. Stine", "Dav Pilkey"],
       answer : "C"
     },
     {
       question: "What was the original flavor of Dunkaroos?",
       choices : ["Chocolate", "Vanilla", "Cinnamon", "Peanut Butter"],
       answer : "C"
     },
     {
       question: "*NSYNC consisted of Justin Timberlake, Lance Bass, JC Chasez, Joey Fatone, and ______?",
       choices : ["Brian Litrell", "Chris Kirkpatrick", "Joey McIntyre", "Jeff Timmons"],
       answer : "B"
     },
     {
       question: "What was the boy's name in Pokemon?",
       choices : ["Poli", "Kai", "Onix", "Ash"],
       answer : "D"
     }
   ],
   answerArray : [],
   correctAnswers : 0,
   incorrectAnswers : 0,
   unanswered : 0,

    // Functions
    // =====================================================================================

    // Load game after start button has been clicked.
    play : function() {
      $("#done").hide();
       var self = this;
       $('#start').on('click', function() {
        // Hide start button
        $(this).hide();
				// Create correct answer array from questions object
				self.createAnswerArray();
        // Populate questions onto the screen
				self.loadQuestions();
        // Starts timer
        self.countdown();
        // Show the "Done" button
        $("#done").show();
			});
			// Game ends when "Done" button is pressed (if timer has not run out)
			$("#done").on('click', function() {
        self.gameEnd();
      });
		},

    // Add 30 seconds to the timer, display timer, and run timer until time runs out
    countdown : function () {
      var seconds = 30;
      var self = this;
      function tick() {
        $('#timer').text("Time Remaining: " + seconds + " Seconds");
        if (seconds > 0) {
          setTimeout(tick,1000);
        } else {
          self.gameEnd();
        }
        seconds--;
      }
      tick();
    },

    // Create correct answer array from questions object
    createAnswerArray : function() {
     for (var k = 0; k < this.questions.length; k++) {      
      this.answerArray.push(this.questions[k].answer);
    };
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
      for (var j = 0; j < this.questions[i].choices.length; j++) {
        // Assign letter equivalent of index
        var valueDict = {0:"A",1:"B",2:"C",3:"D"};
        // Create answer input & label
        var $answer = $("<input>");
        var $label = $("<label>");
        var currentAnswer = this.questions[i].choices[j] 
        // Apply attributes
        $answer.attr({"type": "radio", "name": "question" + i, "id" : "question" + i + "answer" + j, "value" : valueDict[j]});
      	// Insert answer from questions object
      	$label.text(currentAnswer);
      	// Add to div
      	$answersFormDiv.append($answer);
      	$answersFormDiv.append($label);
      };

        // Append answers form div
        $answersForm.append($answersFormDiv);
      	// Append answers form
      	$answersDiv.append($answersForm);
				// Append question div to #questions div
       $('#questions').append($questionDiv);
      	// Append answers div to #questions div
      	$('#questions').append($answersDiv);


      }
    },	

    // Grade game and report results
    gameEnd : function() {
      // Check answers of every question
      this.loopThroughQuestions();
      // Report results
      this.results();
    },

    // Check answers of every question
    loopThroughQuestions : function() {
      for (var n =0; n < this.answerArray.length; n++) {
        this.checkAnswer(n);
      }
    },

    // Check answer of current question
    checkAnswer : function(radioValue) {
      // Select every answer for the question     
      var $radios = $('input[name="question' + radioValue + '"]');
      var blank = 0;
      var answer;

      // Loop through every answer of current question
      $radios.each(function() {
        // If answer is selected, take the value of the answer
        if ($(this).is(':checked')) {
          answer = $(this).attr("value");
        } else {
        // If answer was not selected, increase the blank counter
          blank++
        }
      });
      // If there are four blanks, then no questions were answered
      if (blank === 4) {
        // Increase unanswered counter
        this.unanswered++;
        console.log("Question " + (radioValue+1) + " was not answered.")
      // If answer matches correct answer
      } else if (answer === this.answerArray[radioValue]) {
        // Increase correct answer counter
        this.correctAnswers++;
        console.log("Question " + (radioValue+1) + " was answered correctly!")
      // If answer is not the correct answer
      } else {
        // Increase incorrect answer counter
        this.incorrectAnswers++;
        console.log("Question " + (radioValue+1) + " was answered incorrectly.")
      }     
    },

    // Display results after game end
    results : function() {
      // Remove all questions from the screen
      $('#main').empty();
      // Create message div
      var $messageDiv = $('<div>');
      // Add message class
      $messageDiv.addClass("message");
      // Add text
      $messageDiv.html("All Done!");
      // Create results div
      var $resultsDiv = $('<div>');
      // Add results class
      $resultsDiv.addClass("results");
      // Add text
      $resultsDiv.html("Correct Answers: " + this.correctAnswers + "<br>Incorrect Answers: " + this.incorrectAnswers + "<br>Unanswered: " + this.unanswered);
      // Add message and results divs to the screen
      $('#main').append($messageDiv);
      $('#main').append($resultsDiv);
    },
  }

	// Gameplay
	// =====================================================================================

	triviaApp.play();

});


