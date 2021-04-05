let word = prompt("Welcome to Hangman! Player 1, please enter a word for Player 2 to guess.").toUpperCase();

let revealedLetters = new Array(word.length);

revealedLetters.fill(false);

const maxStrikes = 6; // the maximum number of allowed mistakes
let strikes = 0; // the number of incorrect guesses made so far

let strikeLetters = ""; // this will contain every letter that has been incorrectly guessed.

function checkGuess(currentguess) {
	var match;
	var index;
	var currentGuessInUpper = currentguess.toUpperCase();
	var foundTheMatch = false;
	if (strikes < maxStrikes) {
		for(index = 0; index < word.length; index++) {
			if (word[index] == currentGuessInUpper) {
				revealedLetters[index] = true;
				foundTheMatch = true;
			}
		}
		if (!foundTheMatch) {
			strikes++;
			strikeLetters += currentguess;
			return false;
		}
		return true;
	} else {
		isGameOver();
	}
}

function generateWordProgress() {
    var wordToRender = "";
	//return "dummy";
	for (let index = 0; index < revealedLetters.length; index++) {
		if ( revealedLetters[index] === true) { 
			wordToRender += word[index];
		} else {
			wordToRender += "_";
		}
	}
	return wordToRender;
}

function processGuess(e) {
    e.preventDefault();
    let guess = document.getElementById("letter").value;
	var checkGuessResult = checkGuess(guess);
	if(checkGuessResult===true){ 
		document.getElementById("wordReveal").value = generateWordProgress() ;
	}  else {
		document.getElementById("strikeLetter").value = strikeLetters;
		drawGallows();
	}
	document.getElementById("letter").value = "";
}

function isGameOver(){
	if(strikes===maxStrikes){
		alert("Game is over");
	}
	else if(revealedLetters===word){
		alert("You Win! Game is over.");
		
	}
}

function drawGallows() {
	switch (strikeLetters.length) {
		case 0:
			document.getElementById("image-area").src = "images/strike-0.png";
			break;
		case 1:
			document.getElementById("image-area").src = "images/strike-1.png";
			break;
		case 2:
			document.getElementById("image-area").src = "images/strike-2.png";
			break;
		case 3:
			document.getElementById("image-area").src = "images/strike-3.png";
			break;
		case 4:
			document.getElementById("image-area").src = "images/strike-4.png";
			break;
		case 5:
			document.getElementById("image-area").src = "images/strike-5.png";
			break;
		case 6:
			document.getElementById("image-area").src = "images/strike-6.png";
			break;
	}
}