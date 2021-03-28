function peanoAddition(x,y){
    if(y==0) {
        return x;
    }
    var sum = peanoAddition(x++,y-1);
    return sum;
}
console.log(peanoAddition(1,0));
console.log(peanoAddition(1,1));

let x = prompt("Enter x to add:");
let y = prompt("Enter y to add:");
console.log(peanoAddition(x,y));
