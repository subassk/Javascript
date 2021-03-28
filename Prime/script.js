let x = prompt("Enter x to test isPrime:");
let result = isPrime(x,2);

if(result)
    alert(x + "is Prime!");
else    
    alert(x + "is not prime");

function isPrime(number,divisor){
    if(number==1) {
        return false;
    }
    if(number==2){
        return true;
    }
    if(number%divisor ==0){
        return false;
    }
    return true;   
}
