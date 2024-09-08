const form = document.querySelector("#todo-form");

let toDos = [];

form.addEventListener("submit", event => {
  event.preventDefault();

  toDos.push({
    id: "placeholder",
    task: event.target[0].value,
    status: false,
  });

  console.log(`Task: ${event.target[0].value}`);
  console.log(`Button: clicked`);
});
