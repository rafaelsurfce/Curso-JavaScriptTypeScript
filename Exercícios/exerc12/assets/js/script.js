const veriNumber = (num) => {
    if(typeof num !== 'number'){
        return NaN;
    }
    if (num % 3 === 0 && num % 5 === 0){
        return "FizzBuzz";
    }
    else if(num % 3 === 0){
        return "Fizz";
    }
    else if(num % 5 === 0){
        return "Buzz";
    }
    else{
        return num;
    }
}

console.log('a', veriNumber("a"));
for (i = 0; i <=100; i++){
    console.log(i, veriNumber(i));
}
