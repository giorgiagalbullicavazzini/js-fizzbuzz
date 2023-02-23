// - Using the same `for` statement, the code applies different styles to the elements;
// - IF the element is a "Fizz" string, its background-color is green;
// - ELSE IF the element is a "Fizz" string, its background-color is green;
// - ELSE IF the element is a "FizzBuzz" string, its background-color is red;
// - ELSE the background-color is blue.


// Using the `for` statement, the code creates a loop and prints in console the numbers between 1 and 100
for (let i = 1; i <= 100; i++) {
  // Using the `append()` function, the code adds a HTML element to the container
  // This element contains the correct number or string
  const container = document.querySelector('.container');
  const box = document.createElement('div');

  // IF the number is a multiple of 3 AND a multiple of 5, the code prints "FizzBuzz" instead
  // ELSE IF the number is a multiple of 5, the code prints "Buzz"
  // ELSE IF the number is a multiple of 3, the code prints "Fizz"
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
    box.append('FizzBuzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
    box.append('Fizz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
    box.append('Buzz');
  } else {
    console.log(i);
    box.append(i);
  }

  // The code adds all the numbers between 1 and 100 to the container
  container.append(box);
};