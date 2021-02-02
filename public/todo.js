"use strict";
const form = document.querySelector(".new-todo-form");
const state = document.querySelector("#state");
const description = document.querySelector("#description");
const ul = document.querySelector(".todo-list");
const task = document.querySelector("#task");
let allTask = [];
window.onload = (e) => {
    let newAllTask = localStorage.getItem('allTask');
    allTask = JSON.parse(newAllTask);
    if (allTask) {
        allTask.map(task => {
            console.log(task, 'task');
        });
    }
};
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
        const btn1 = document.createElement('button');
        btn1.classList.add('btn-edt');
        btn1.classList.add('btn');
        btn1.innerText = 'Edit';
        btn1.type = 'button';
        li.append(btn1);
        li.append(btn);
        this.container.prepend(li);
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const tTask = new Todo(state.value, task.value, description.value, ul);
    allTask.push(tTask);
    localStorage.setItem('allTask', JSON.stringify(allTask));
    tTask.render();
    form.reset();
});
