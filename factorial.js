function factorial(num){
    if(num ===0|| num ===1) {
        return 1;
    }
    else{
        return num * factorial(num -1);
    }
}

console.log(factorial(5));


//con ciclo
var total= 1;
function factorial2(num){
for(var i = 0; i < num; i++){
    total *= num-i;
    }
    return total;
}
factorial2(5);