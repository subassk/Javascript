function isPalindrome(input) {
    var length = input.length;
    let c = 0;
    while (c <= length/2)  {
        if (input[c] != input[length - 1 - c]) { 
            return false;
        }
        c = c + 1;
    }
    return true;
}

//input: string phrase
let input = prompt("Enter a phrase:");

//output: true/false result
console.log(isPalindrome(input));


