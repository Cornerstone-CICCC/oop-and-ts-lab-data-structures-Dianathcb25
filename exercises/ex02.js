// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function removeBetween(stack, a, b) {
  // your code here
  const tempStack = new Stack();
  let indexA = false;
  let indexB = false;

  while (!stack.isEmpty() && !indexB) {
    const element = stack.pop();
    tempStack.push(element);

    if (element === b) {
      indexB = true;
    }
  }

  while (!stack.isEmpty() && !indexA) {
    if (stack.peek() === a) {
      indexA = true;
    } else {
      stack.pop();
    }
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}

const fruits = new Stack();
fruits.push('Apple');
fruits.push('Banana');
fruits.push('Cherry');
fruits.push('Date');
fruits.push('Elderberry');

removeBetween(fruits, 'Banana', 'Elderberry');
console.log(fruits.printStack()); // Apple Banana Elderberry
