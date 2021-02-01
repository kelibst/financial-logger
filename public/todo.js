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
        const btn = document.createElement('button');
        btn.classList.add('btn-rmv');
        btn.classList.add('btn');
        btn.innerText = 'Remove';
        btn.type = 'button';
        li.append(btn);
        this.container.prepend(li);
    }
}
let allTask = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const tTask = new Todo(state.value, task.value, description.value, ul);
    allTask.push(tTask);
    console.log(allTask);
    tTask.render();
    form.reset();
});
export {};
