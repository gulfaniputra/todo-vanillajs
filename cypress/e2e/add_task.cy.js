describe("Vanilla JS Todo App", () => {
  beforeEach(() => {
    // 1. A user visits the app
    cy.visit("/index.html");
  });

  it("successfully add a new task and persist after reload", () => {
    // 2. They click a button labeled 'Add Task'
    cy.get("button").contains("Add Task").click();

    // 3. They type "Task 0" into the input that has an id of 'task-input'
    cy.get("#task-input").type("Task 0");

    // 4. The '[id=task-input]' input has "Task 0" as its value
    cy.get("#task-input").should("have.value", "Task 0");

    // 5. They click the 'Add Task' button
    cy.get("button").contains("Add Task").click();

    // 6. They expect the "Task 0" to be on the list
    cy.get("ul").should("contain", "Task 0");

    // 7. The user reload the app
    cy.reload();

    // 8. They expect the "Task 0" to be on the list
    cy.get("ul").should("contain", "Task 0");
  });

  afterEach(() => {
    // 9. Clean up: Remove 'localStorage' to ensure the app revert to its initial state
    cy.clearLocalStorage();
    cy.visit("/index.html");
  });
});
