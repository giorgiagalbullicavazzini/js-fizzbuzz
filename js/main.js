'use strict';

const container = document.querySelector('.container');

// Using the `for` statement, the code creates a loop and prints in console the numbers between 1 and 100
for (let i = 1; i <= 100; i++) {
  // Using the `append()` function, the code adds a HTML element to the container
  // This element contains the correct number or string
  const box = document.createElement('div');

  // Using the same `for` statement, the code applies different styles to the elements
  box.classList.add("box");

  // IF the number is a multiple of 3 AND a multiple of 5, the code prints "FizzBuzz" instead and its background-color is red
  // ELSE IF the number is a multiple of 3, the code prints "Fizz" and its background-color is green
  // ELSE IF the number is a multiple of 5, the code prints "Buzz" and its background-color is yellow
  // ELSE the code prints the proper number and its background-color is blue
  if (i % 3 == 0 && i % 5 == 0) {
    box.classList.add("fizzbuzz");
    box.append('fizzbuzz');
  } else if (i % 3 == 0) {
    box.classList.add("fizz");
    box.append('fizz');
  } else if (i % 5 == 0) {
    box.classList.add("buzz");
    box.append('buzz');
  } else {
    box.append(i);
  }

  // The code adds all the numbers between 1 and 100 to the container
  container.append(box);
};