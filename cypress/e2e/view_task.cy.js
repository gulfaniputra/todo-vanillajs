describe("Vanilla JS Todo App", () => {
  beforeEach(() => {
    // 1. A user visits the app
    cy.visit("/index.html");
  });

  it("successfully view a list of tasks", () => {
    // 2. They type "Task 0" into the input that has an id of 'task-input'
    cy.get("#task-input").type("Task 0");

    // 3. They click a button labeled 'Add Task'
    cy.get("button").contains("Add Task").click();

    // 4. The '[id=task-input]' input has "Task 0" as its value
    cy.get("#task-input").should("have.value", "Task 0");

    // 5. The user reload the app
    cy.reload();

    // 6. They expect the "Task 0" to be on the list
    cy.get("ul").should("contain", "Task 0");

    // 7. They type "Task 1" into the input that has an id of 'task-input'
    cy.get("#task-input").type("Task 1");

    // 8. They click a button labeled 'Add Task'
    cy.get("button").contains("Add Task").click();

    // 9. The '[id=task-input]' input has "Task 1" as its value
    cy.get("#task-input").should("have.value", "Task 1");

    // 10. The user reload the app
    cy.reload();

    // 11. They also expect the "Task 1" to be on the list
    cy.get("ul").should("contain", "Task 1");
  });

  afterEach(() => {
    // 12. Clean up: Remove 'localStorage' to ensure the app revert to its initial state
    cy.clearLocalStorage();
    cy.visit("/index.html");
  });
});
