describe("Vanilla JS Todo App", () => {
  beforeEach(() => {
    // 1. A user visits the app
    cy.visit("/index.html");
  });

  it("successfully mark a task", () => {
    // 2. They type "Task 0" into the input that has an id of 'task-input'
    cy.get("#task-input").type("Task 0");

    // 3. They click a button labeled 'Add Task'
    cy.get("button").contains("Add Task").click();

    // 4. The '[id=task-input]' input has "Task 0" as its value
    cy.get("#task-input").should("have.value", "Task 0");

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
