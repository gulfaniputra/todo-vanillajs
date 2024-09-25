const form = document.querySelector("#todo-form");

class Storage {
  addNew() {
    localStorage.setItem("toDosData", JSON.stringify(storage));
  }

  getAll() {
    if (
      localStorage.getItem("toDosData") !== null &&
      localStorage.getItem("toDosData") !== undefined
    ) {
      storage = JSON.parse(localStorage.getItem("toDosData"));
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
