describe("React TodoMVC practice", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8888");
  });

  it("adds five todos", () => {
    cy.get(".new-todo")
      .type("Buy Milk{enter}")
      .type("Pay Rent{enter}")
      .type("Walk Dog{enter}")
      .type("Get Gas{enter}")
      .type("Buy Flowers for Anniversary{enter}");

    cy.get(".todo-list li").should("have.length", 5);
  });

  it("focuses on the todo input field, when theh app is first opened", () => {
    cy.focused().should("have.class", "new-todo");
  });

  it("should clear text input field when an item is added", () => {
    cy.get(".new-todo").type("Buy Milk{enter}");

    cy.get(".new-todo").should("have.text", "");
  });

  it('can mark a todo as "completed"', () => {
    cy.get(".new-todo").type("Buy Milk{enter}");

    cy.get(".todo-list li").eq(0).find(".toggle").check();

    cy.get(".todo-list li").eq(0).should("have.class", "completed");
  });

  it('the "Clear completed" button clears all completed todos', () => {
    cy.get(".new-todo").type("Buy Milk{enter}");

    cy.get(".todo-list li").eq(0).find(".toggle").check();

    cy.get(".clear-completed").click();

    cy.get(".todo-list li").should("have.length", 0);
  });

  it("allows you to edit a todo", () => {
    cy.get(".new-todo").type("Buy Milk{enter}");

    cy.get(".todo-list li").eq(0).find("label").dblclick();

    cy.get(".todo-list li")
      .eq(0)
      .find(".edit")
      .clear()
      .type("Pay Rent")
      .type("{enter}");

    cy.get(".todo-list li").eq(0).contains("Pay Rent");
  });

  it("should save edits on blur", () => {
    cy.get(".new-todo").type("Buy Milk{enter}");

    cy.get(".todo-list li").eq(0).find("label").dblclick();

    cy.get(".todo-list li").eq(0).find(".edit").clear().type("Pay Rent").blur();

    cy.get(".todo-list li").eq(0).contains("Pay Rent");
  });

  it("should display the current number of todo items", () => {
    cy.get(".new-todo").type("Buy Milk{enter}").type("Pay Rent{enter}");

    cy.get(".todo-count").contains("2 items left");
  });

  it("should persist its data after a page refresh", () => {
    cy.get(".new-todo").type("Buy Milk{enter}").type("Pay Rent{enter}");

    cy.reload();

    cy.get(".todo-list li").should("have.length", 2);
  });

  it("can display only completed todos", () => {
    cy.get(".new-todo").type("Buy Milk{enter}");

    cy.get(".todo-list li").eq(0).find(".toggle").check();

    cy.get(".filters").contains("Completed").click();

    cy.get(".todo-list li").should("have.length", 1);
  });
  it("does NOT display the footer when there are no todos", () => {
    cy.get(".footer").should("not.exist");
    cy.get(".todo-list").should("not.exist");
  });
});
