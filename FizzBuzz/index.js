function FizzBuzz(inputOfNum) {
    if(typeof inputOfNum !== Number){
        if(((inputOfNum % 3) == 0) && ((inputOfNum % 5) == 0)) console.log("FizzBuzz");
        else if((inputOfNum % 3) == 0) console.log("Fizz");
        else if((inputOfNum % 5) == 0) console.log("Buzz");
        else if(((inputOfNum % 3) != 0) && ((inputOfNum % 5) != 0)) console.log(inputOfNum);
    }
    else console.log('Not a Number');
}
