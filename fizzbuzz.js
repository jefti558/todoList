function fizzBuzz() {
    let fizz = 3;
    let buzz = 5;
    for (let i = 1; i < 100; i++) {
        if (i % fizz*buzz == 0) {
            console.log("FizzBuzz");
        }
        else if (i % buzz == 0) {
            console.log("Buzz");
        }
        else if (i % fizz == 0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
}