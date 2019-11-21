var secretNumber = 7;
var guess = 1;

while (guess !== secretNumber){
    guess = prompt('Guess the number between 1 and 10.');
    guess = Number(guess);    
}

alert ('You guessed the number!');
      
