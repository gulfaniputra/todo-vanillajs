const button = document.querySelector("button");
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
      <button class="task-complete" onclick="completeTask('${toDo.id}')">
        <span>&#10003;</span>
      </button>
    </li>
    `;
  });
  // Render the tasks as a list
  list.innerHTML = html;
}

button.onclick = function (event) {
  event.preventDefault();

  storage.addNew({
    id: self.crypto.randomUUID(),
    task: document.querySelector("#task-input").value,
    status: false,
  });

  tasksListUi();
};

function completeTask(id) {
  let allTasks = storage.getAll();
  allTasks = allTasks.filter(toDo => toDo.id !== id);
  localStorage.setItem("toDosData", JSON.stringify(allTasks));
  tasksListUi();
}

// Load data from memory on application start
tasksListUi();
