// JavaScript: Trivia Game | By Juliette Rapala
// =====================================================================================
//
// To Do:
//
// All Done!
// Correct Answers: 4
// Incorrect Answers: 
// Unanswered: 0
//

$(document).ready(function(){

	var triviaApp = {

		// Variables 
		// =====================================================================================


		totalTime : 30,
    seconds : this.totalTime,
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
        // Start timer
        self.tick();
				//$('#timer').html("Time Remaining: " + self.tick + " Seconds");
				self.createAnswerArray();
				self.loadQuestions();
        $("#done").show();
			});
			// Marking end game instead of timer
			$("#done").on('click', function() {
				self.loopThroughQuestions();
        self.results();
      });
		},

		tick : function() {
			this.seconds = setInterval(this.countdown(), 1000)
		},

    countdown : function () {
      this.seconds--;
      $("#timer").html("Time Remaining: " + this.seconds + " Seconds");
    },
		

    createAnswerArray : function() {
     for (var k = 0; k < this.questions.length; k++) {      
      this.answerArray.push(this.questions[k].answer);
    };
    console.log(this.answerArray);
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


    loopThroughQuestions : function() {
      for (var n =0; n < this.answerArray.length; n++) {
        this.checkAnswer(n);
      }
    },

    checkAnswer : function(radioValue) {     
      var $radios = $('input[name="question' + radioValue + '"]');
      var blank = 0;
      var answer;
      $radios.each(function() {
        if ($(this).is(':checked')) {
          answer = $(this).attr("value");
          console.log("Radio was checked " + answer);
        } else {
          blank++
          console.log("Radio was not checked.");
        }
      });
      if (blank === 4) {
        this.unanswered++;
        console.log("Question " + radioValue + " was not answered.")
      } else if (answer === this.answerArray[radioValue]) {
        this.correctAnswers++;
        console.log("Question " + radioValue + " was answered correctly!")
      } else {
        this.incorrectAnswers++;
        console.log("Question " + radioValue + " was answered incorrectly.")
      }     
    },

    results : function() {
      $('#main').empty();
      var $messageDiv = $('<div>');
      $messageDiv.addClass("message");
      $messageDiv.html("All Done!");
      var $resultsDiv = $('<div>');
      $resultsDiv.addClass("results");
      		//this.unanswered = this.questions.length - this.correctAnswers - this.incorrectAnswers;   
      		$resultsDiv.html("Correct Answers: " + this.correctAnswers + "<br>Incorrect Answers: " + this.incorrectAnswers + "<br>Unanswered: " + this.unanswered);
      		$('#main').append($messageDiv);
      		$('#main').append($resultsDiv);

      	},



      }

	// Gameplay
	// =====================================================================================

	triviaApp.play();

});


// All Done!
// Correct Answers: 4
// Incorrect Answers: 
// Unanswered: 0




