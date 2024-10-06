const form = document.querySelector("#todo-form");

class Storage {
  addNew(newItem) {
    // If there is nothing, create an array and add new element to it before saving
    let toDos;
    if (newItem === null) {
      toDos = [];
      toDos.push(newItem);
      localStorage.setItem("toDosData", JSON.stringify(toDos));
      // If there is already some data, append the new element on the end
    } else if (newItem !== null) {
      toDos.push(newItem);
      localStorage.setItem("toDosData", JSON.stringify(toDos));
    }
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
