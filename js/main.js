// - Creation of a HTML container;
// - Using the `append()` function, the code adds a HTML element to the container;
// - This element contains the correct number or string;
// - Using the `for` statement, the code adds all the numbers between 1 and 100 to the container;


// - Using the same `for` statement, the code applies different styles to the elements;
// - IF the element is a "Fizz" string, its background-color is green;
// - ELSE IF the element is a "Fizz" string, its background-color is green;
// - ELSE IF the element is a "FizzBuzz" string, its background-color is red;
// - ELSE the background-color is blue.


// Using the `for` statement, the code creates a loop and prints in console the numbers between 1 and 100
for (let i = 1; i <= 100; i++) {
  // IF the number is a multiple of 3 AND a multiple of 5, the code prints "FizzBuzz" instead
  // ELSE IF the number is a multiple of 5, the code prints "Buzz"
  // ELSE IF the number is a multiple of 3, the code prints "Fizz"
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
};