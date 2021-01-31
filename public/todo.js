const form = document.querySelector(".new-todo-form");
const state = document.querySelector("#state");
const description = document.querySelector("#description");
const ul = document.querySelector(".todo-list");
const task = document.querySelector("#task");
class Todo {
    constructor(state, task, description, container) {
        this.state = state;
        this.task = task;
        this.description = description;
        this.container = container;
    }
    render() {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = task.value.trim();
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = description.value.trim();
        li.append(p);
        this.container.prepend(li);
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const tTask = new Todo(state.value, task.value, description.value, ul);
    tTask.render();
    form.reset();
});
export {};
