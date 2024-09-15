const form = document.querySelector("#todo-form");

let toDos = [];

form.addEventListener("submit", event => {
  event.preventDefault();

  toDos.push({
    id: self.crypto.randomUUID(),
    task: event.target[0].value,
    status: false,
  });

  console.log(`Button: clicked`);
  console.log(`ID: ${self.crypto.randomUUID()}`);
  console.log(`Task: ${event.target[0].value}`);
});
