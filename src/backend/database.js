// This file is meant to be representing a database and simply stores the data structures for different data

let taskList = []; // Each object is a task: Date, icon, color, description. id, isComplete
let diaryEntries = []; // Each object is an entry: Date, text, pictures, id, background, stickers, fronts, etc.
let starCount = 0;
let inventoryItems = []; // Each object is simply an icon and text description
let storeItems = []; // Each object is icon, text description, cost, isOwned **Populate this list in here Ritwika! <---

// Add to task list: Take task object as parameter
function addTask(task) {
  taskList.push(task);
}

// Remove from task list: Take task id as parameter
function removeTask(id) {
  let index = taskList.findIndex((element) => element.id == id);
  taskList.splice(index, index);
}

// Edit task list: Take task as parameter
function editTask(task) {
  removeTask(task.id);
  addTask(task);
}

// Complete or undo completing task
function completeTask(id, complete) {
  let index = taskList.findIndex((element) => element.id == id);
  taskList[index].isComplete = complete;
}

// Add diary entry item
function addEntry(entry) {
  diaryEntries.push(entry);
}

// Remove entry item
function removeEntry(id) {
  let index = diaryEntries.findIndex((element) => element.id == id);
  diaryEntries.splice(index, index);
}

// Edit entry item
function editEntry(entry) {
  removeEntry(entry.id);
  addEntry(entry);
}

// Add to star balance
function depositStars(numOfStars) {
  starCount += numOfStars;
}

// Remove from star balance
function withdrawStars(numOfStars) {
  starCount -= numOfStars;
}

// Add item to inventory after purchase
function addItemToInventory(item) {
  inventoryItems.push(item);
}

// Indicate item was bought
function storeItemBought(item) {
  let index = storeItems.findIndex((element) => element.id == item.id);
  storeItems[index].owned = true;
}
