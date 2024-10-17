const form = document.querySelector("#todo-form");
const list = document.querySelector("#todo-list");

class Storage {
  addNew(newItem) {
    // Create an array and add new element to it before saving
    let toDos = this.getAll();
    toDos.push(newItem);
    localStorage.setItem("toDosData", JSON.stringify(toDos));
  }

  getAll() {
    // Return data when the method reads it
    if (localStorage.getItem("toDosData") !== null) {
      return JSON.parse(localStorage.getItem("toDosData"));
      // Return empty array when it's empty
    } else if (localStorage.getItem("toDosData") === null) {
      return [];
    }
  }
}

const storage = new Storage();

form.addEventListener("submit", event => {
  event.preventDefault();

  storage.addNew({
    id: self.crypto.randomUUID(),
    task: event.target[0].value,
    status: false,
  });
});

function tasksListUi() {
  // Collect all tasks
  let allTasks = this.storage.getAll();
  let html = ``;
  // Loop over toDos and add tasks 'id' and 'title' as strings of HTML <li> element
  allTasks.forEach(toDo => {
    html += `
    <li id="${toDo.id}">
      ${todo.title}
      <button class="task-complete">
        <span>&#10003;</span>
      </button>
    </li>`;
  });
  // Render the tasks as a list to user
  list.innerHTML = html;
}
