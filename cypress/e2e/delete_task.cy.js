describe("Vanilla JS Todo App", () => {
  beforeEach(() => {
    // 1. A user visits the app
    cy.visit("/index.html");
  });

  it("successfully delete a task", () => {
    // 2. They type "Task 0" into the input that has an id of 'task-input'
    cy.get("#task-input").type("Task 0");

    // 3. They click a button labeled 'Add Task'
    cy.get("button").contains("Add Task").click();

    // 4. The '[id=task-input]' input has "Task 0" as its value
    cy.get("#task-input").should("have.value", "Task 0");

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
