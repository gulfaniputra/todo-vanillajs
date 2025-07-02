import { createTodo } from "../support/create-todo-helper";

describe("Vanilla JS Todo App", () => {
  beforeEach(() => {
    // 1. A user visits the app
    cy.visit("/index.html");
  });

  it("successfully mark a task", () => {
    createTodo("Task 0");

    // 5. The user clicks the checkbox with class="task-checkbox"
    cy.get(".task-checkbox").first().as("taskCheckbox");
    cy.get("@taskCheckbox").click();

    // 6. Then the checkbox 'toDo.status' will be switch to 'checked'
    cy.get("@taskCheckbox").should("be.checked");

    // 7. The user reloads the app
    cy.reload();

    // Then they expect "Task 0" checkbox 'toDo.status' is switched to 'checked'
    cy.get(".task-checkbox").first().should("be.checked");
  });

  afterEach(() => {
    // 9. Clean up: Remove 'localStorage' to ensure the app revert to its initial state
    cy.clearLocalStorage();
    cy.visit("/index.html");
  });
});
