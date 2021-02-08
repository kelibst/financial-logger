"use strict";
const form = document.querySelector(".new-todo-form");
const state = document.querySelector("#state");
const description = document.querySelector("#description");
const ul = document.querySelector(".todo-list");
const task = document.querySelector("#task");
let allTask = [];
class Todo {
    constructor(state, task, description) {
        this.state = state;
        this.task = task;
        this.description = description;
    }
}
window.onload = (e) => {
    let newAllTask = localStorage.getItem("allTask") || '[]';
    if (newAllTask) {
        let somenewAllTask = JSON.parse(newAllTask);
        allTask = somenewAllTask;
        if (allTask) {
            allTask.map((task, index) => {
                renderContent(task.state, task.task, task.description, ul, index);
            });
        }
    }
};
const renderContent = (state, task, description, container, id) => {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.innerText = task;
    li.append(h4);
    const p = document.createElement("p");
    p.innerText = description;
    li.append(p);
    const btn = document.createElement("button");
    btn.classList.add("btn-rmv");
    btn.classList.add("btn");
    btn.id = `rmv-${id}`;
    btn.innerText = "Remove";
    btn.type = "button";
    const btn1 = document.createElement("button");
    btn1.classList.add("btn-edt");
    btn1.classList.add("btn");
    btn1.id = `edt-${id}`;
    btn1.innerText = "Edit";
    btn1.type = "button";
    li.append(btn1);
    li.append(btn);
    container.append(li);
};
ul.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("btn-rmv")) {
        let Tasks = allTask.filter((tsk, ind) => ind !== Number(target.id.charAt(target.id.length - 1)));
        localStorage.setItem("allTask", JSON.stringify(Tasks));
        ul.removeChild(target.parentNode);
    }
    else if (target.classList.contains("btn-edt")) {
        let currentTask = allTask.find((tsk, ind) => ind !== Number(target.id.charAt(target.id.length - 1)));
        state.value = currentTask ? currentTask.state : "";
        task.value = currentTask ? currentTask.task : "";
        description.value = currentTask ? currentTask.description : "";
    }
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const tTask = new Todo(state.value, task.value, description.value);
    allTask.push(tTask);
    localStorage.setItem("allTask", JSON.stringify(allTask));
    renderContent(state.value, task.value, description.value, ul, allTask.length - 1);
    form.reset();
});
