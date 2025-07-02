export function createTodo(text) {
  // 2. They type "Task 0" into the input that has an id of 'task-input'
  cy.get("#task-input").type(text);

  // 3. They click a button labeled 'Add Task'
  cy.get("button").contains("Add Task").click();

  // 4. The '[id=task-input]' input has "Task 0" as its value
  cy.get("#task-input").should("have.value", text);
}
