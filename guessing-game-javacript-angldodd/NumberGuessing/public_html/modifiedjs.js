var secretNumber = 7;
var guess = 1;

while (guess !== secretNumber && guess !== 0){
    guess = prompt ('Guess the number between 1 and 10 or enter 0 to stop.');
    guess = Number(guess);
}

if (guess === secretNumber) {
    document.write ('You guessed the secret number!');
}
else { 
    document.write ('Sorry, the secret number will remain secret!');
}


