const form = document.querySelector("#todo-form");
const list = document.querySelector("#todo-list");

class Storage {
  addNew(newItem) {
    // Create an array & add a new element to it before saving
    let toDos = this.getAll();
    toDos.push(newItem);
    localStorage.setItem("toDosData", JSON.stringify(toDos));
  }

  getAll() {
    // Return data when the method reads it
    if (localStorage.getItem("toDosData") !== null) {
      return JSON.parse(localStorage.getItem("toDosData"));
      // Return an empty array when it's empty
    } else if (localStorage.getItem("toDosData") === null) {
      return [];
    }
  }
}

const storage = new Storage();

function tasksListUi() {
  // Collect all tasks
  let allTasks = storage.getAll();
  let html = ``;
  // Loop over allTasks then add task's 'id' & 'title' as strings
  // of HTML <li> element
  allTasks.forEach(toDo => {
    html += `
    <li id="${toDo.id}">
    ${toDo.task}
    <button class="task-complete">
    <span>&#10003;</span>
    </button>
    </li>`;
  });
  // Render the tasks as a list
  list.innerHTML = html;
}

function buttonsCallbacks(event) {
  event.preventDefault();

  if (event.target.classList.contains("task-complete")) {
    // Get an incomplete to-do and mark it as completed
    let allTasks = storage.getAll();
    allTasks = allTasks.filter(
      toDo => toDo.id !== event.target.parentElement.id
    );
    // Save the changed data
    storage.addNew(allTasks);
  } else {
    storage.addNew({
      id: self.crypto.randomUUID(),
      task: event.target[0].value,
      status: false,
    });
  }

  tasksListUi();
}

form.addEventListener("submit", buttonsCallbacks);
