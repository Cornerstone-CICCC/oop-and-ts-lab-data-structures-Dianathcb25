// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require('../lib/DLL');

function deleteAllNodesWithValue(list, value) {
  // your code here
  let runner = list.getHead();

  while (runner !== null) {
    const node = runner.next;

    if (runner.data === value) {
      if (runner.prev === null) {
        list.setHead(runner.next);

        if (runner.next) runner.next.prev = null;
      } else {
        runner.prev.next = runner.next;
      }

      if (runner.next === null) {
        list.setTail(runner.prev);
        if (runner.prev) runner.prev.next = null;
      } else {
        (runner.next, (prev = runner.prev));
      }
      list.setSize(list.length() - 1);
    }
    runner = node;
  }
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5
