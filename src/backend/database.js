// This file is meant to be representing a database and simply stores the data structures for different data

let taskList = []; // Each object is a task: Date, icon, color, description. id, isComplete
let diaryEntries = []; // Each object is an entry: Date, text, pictures, id, background, stickers, fronts, etc.
let starCount = 0;
let inventoryItems = []; // Each object is simply an icon and text description
let storeItems = []; // Each object is icon, text description, cost, isOwned **Populate this list in here Ritwika! <---

// Add to task list: Take task object as parameter
export function addTask(task) {
  taskList.push(task);
  console.log(taskList);
}

// Remove from task list: Take task id as parameter
export function removeTask(id) {
  let index = taskList.findIndex((element) => element.id == id);
  taskList.splice(index, index);
}

// Edit task list: Take task as parameter
export function editTask(task) {
  removeTask(task.id);
  addTask(task);
}

// Complete or undo completing task
export function completeTask(id, complete) {
  let index = taskList.findIndex((element) => element.id == id);
  taskList[index].isComplete = complete;
}

// Retrieve the tasklist
export function getTaskList(date) {
  return taskList.filter((task) => task.date == date);
}

// Add diary entry item
export function addEntry(entry) {
  diaryEntries.push(entry);
}

// Remove entry item
export function removeEntry(id) {
  let index = diaryEntries.findIndex((element) => element.id == id);
  diaryEntries.splice(index, index);
}

// Edit entry item
export function editEntry(entry) {
  removeEntry(entry.id);
  addEntry(entry);
}

export function getEntry(date) {
  return diaryEntries.filter((entry) => entry.date == date);
}

export function getStars() {
  return starCount;
}

// Add to star balance
export function depositStars(numOfStars) {
  starCount += numOfStars;
}

// Remove from star balance
export function withdrawStars(numOfStars) {
  starCount -= numOfStars;
}

// Add item to inventory after purchase
export function addItemToInventory(item) {
  inventoryItems.push(item);
}

export function getInventory() {
  return inventoryItems;
}

// Indicate item was bought
export function storeItemBought(item) {
  let index = storeItems.findIndex((element) => element.id == item.id);
  storeItems[index].owned = true;
}

export function getStoreItems() {
  return storeItems;
}
