// using the IIFES to achieve module pattern

/* (() => {
	const Question = function (question, answers, correct) {
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	};

	// method to display the question
	Question.prototype.displayQuestion = function () {
		console.log(this.question);
		for (let i = 0; i < this.answers.length; i++) {
			console.log(`${i}: ${this.answers[i]}`);
		}
	};

	// method to check the user's answer
	Question.prototype.checkAnswer = function (ans) {
		if (ans === this.correct) {
			console.log('Correctly answered!');
		} else {
			console.log('Oops! wrong answer, try again.');
		}
	};

	// Creating question instances from the Question Object
	const q1 = new Question(
		'Who is the son of God?',
		['John', 'Joseph', 'Jesus'],
		2
	);
	const q2 = new Question('Was John the disciple of Jesus?', ['YES', 'NO'], 0);
	const q3 = new Question(
		'Who is the mother of Jesus?',
		['Ene', 'Oche', 'Aondo', 'Mary'],
		3
	);
	const q4 = new Question(
		'What is full meaning of IBM?',
		[
			'Internet Bus Manager',
			'International Business Management',
			'International Business Machines'
		],
		2
	);

	// store all the question instances in an array
	const questions = new Array(q1, q2, q3, q4);

	// randomNumber generated with respect to the length of the question instances
	const randomNumber = Math.floor(Math.random() * questions.length);

	// Get random question
	const getRandomQuestion = questions[randomNumber];

	getRandomQuestion.displayQuestion();

	const answer = parseInt(prompt('Please provide the answer:'));

	// calling the chack answer method
	getRandomQuestion.checkAnswer(answer);
})();
 */

// Expert Level Dev
(() => {
	const Question = function (question, answers, correct) {
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	};

	// method to display the question
	Question.prototype.displayQuestion = function () {
		console.log(this.question);
		for (let i = 0; i < this.answers.length; i++) {
			console.log(`${i}: ${this.answers[i]}`);
		}
	};

	// method to check the user's answer
	Question.prototype.checkAnswer = function (ans, callback) {
		let score;
		if (ans === this.correct) {
			console.log('Correctly answered!');
			score = callback(true);
		} else {
			console.log('Oops! wrong answer, try again.');
			score = callback(false);
		}

		this.displayScore(score);
	};

	// Method to display user's score
	Question.prototype.displayScore = function (score) {
		console.log(`Your current score is : ${score}`);
		console.log('------------------------------------');
	};

	// Creating question instances from the Question Object
	const q1 = new Question(
		'Who is the son of God?',
		['John', 'Joseph', 'Jesus'],
		2
	);
	const q2 = new Question('Was John the disciple of Jesus?', ['YES', 'NO'], 0);
	const q3 = new Question(
		'Who is the mother of Jesus?',
		['Ene', 'Oche', 'Aondo', 'Mary'],
		3
	);
	const q4 = new Question(
		'What is full meaning of IBM?',
		[
			'Internet Bus Manager',
			'International Business Management',
			'International Business Machines'
		],
		2
	);

	// store all the question instances in an array
	const questions = new Array(q1, q2, q3, q4);

	// Score function
	const score = () => {
		let sc = 0;
		return (correct) => {
			if (correct) {
				sc++;
			}
			return sc;
		};
	};

	// Calling the score function and saving to a memory location - saveScore
	const saveScore = score();

	const nextQuestion = () => {
		// randomNumber generated with respect to the length of the question instances
		const randomNumber = Math.floor(Math.random() * questions.length);

		// Get random question
		const getRandomQuestion = questions[randomNumber];

		getRandomQuestion.displayQuestion();

		// Get user's input
		const answer = prompt('Please provide the answer:');

		if (answer !== 'exit') {
			// calling the chack answer method
			getRandomQuestion.checkAnswer(parseInt(answer), saveScore);

			// recursive calling of nextQuestion
			nextQuestion();
		}
	};

	// Calling nextQuestion
	nextQuestion();
})();
