let min = 3;
let max = 10;
let target = Math.random() * (max - min + 1); 
target = Math.floor(target) + min;
let guess = 0; 
guess = prompt("guess a number bet 3 and 10");
while ( guess != target) {
    if(guess > target)
        alert("guess is too high!");
    else if(guess < target)
        alert("Guess is too low!");
    guess = prompt("guess a number bet 3 and 10");    
}
alert("You got it!");