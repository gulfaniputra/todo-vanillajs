const form = document.querySelector("#todo-form");

let toDos = [];

class Storage {
  addNew() {
    localStorage.setItem("toDosData", JSON.stringify(toDos));
  }

  getAll() {
    if (
      localStorage.getItem("toDosData") !== null &&
      localStorage.getItem("toDosData") !== undefined
    ) {
      toDos = JSON.parse(localStorage.getItem("toDosData"));
    }
  }
}

const storage = new Storage();

form.addEventListener("submit", event => {
  event.preventDefault();

  toDos.push({
    id: self.crypto.randomUUID(),
    task: event.target[0].value,
    status: false,
  });

  storage.addNew({ ...toDos });
});
