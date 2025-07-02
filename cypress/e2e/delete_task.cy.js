import { createTodo } from "../support/create-todo-helper";

describe("Vanilla JS Todo App", () => {
  beforeEach(() => {
    // 1. A user visits the app
    cy.visit("/index.html");
  });

  it("successfully delete a task", () => {
    createTodo("Task 0");

    // 5. They click a button labeled '✕'
    cy.contains("button", "✕").click();

    // 6. The onclick="completeTask('${toDo.id}') is triggered & "Task 0" is deleted
    cy.contains("Task 0").should("not.exist");
  });

  afterEach(() => {
    // 7. Clean up: Remove 'localStorage' to ensure the app revert to its initial state
    cy.clearLocalStorage();
    cy.visit("/index.html");
  });
});
