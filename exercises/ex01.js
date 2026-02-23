// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require('../lib/Stack');

function calcDistance(stack, a, b) {
  // your code here
  const tempStack = new Stack();
  let index = 0;
  let indexA = -1;
  let indexB = -1;

  while (!stack.isEmpty()) {
    const element = stack.pop();
    tempStack.push(element);

    if (element === a) indexA = index;
    if (element === b) indexB = index;

    index++;
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

  if (indexA >= indexB) {
    return indexA - indexB;
  } else {
    return indexB - indexA;
  }
}

const students = new Stack();
students.push('John');
students.push('Joe');
students.push('Jane');
students.push('Jill');
students.push('Jim');

const distance = calcDistance(students, 'Joe', 'Jim');
console.log(distance); // 3
const distance2 = calcDistance(students, 'Joe', 'Jill');
console.log(distance2); // 2
