const form = document.querySelector(".new-todo-form") as HTMLFormElement;
const state = document.querySelector("#state") as HTMLSelectElement;
const description = document.querySelector("#description") as HTMLInputElement;
const ul = document.querySelector(".todo-list") as HTMLUListElement;
const task = document.querySelector("#task") as HTMLInputElement;
let allTask: Todo[] = [];
class Todo {
  constructor(
    public state: string,
    public task: string,
    public description: string
  ) {}
}

window.onload = (e: Event) => {
  let newAllTask = localStorage.getItem("allTask");
  let somenewAllTask: Todo[] = JSON.parse(newAllTask!);
  allTask = somenewAllTask;
  if (allTask) {
    allTask.map((task, index) => {
      renderContent(task.state, task.task, task.description, ul, index);
    });
  }
};

const renderContent = (
  state: string,
  task: string,
  description: string,
  container: HTMLUListElement,
  id: number
) => {
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
  const target = e.target as HTMLButtonElement;

  if (target.classList.contains("btn-rmv")) {
    let Tasks = allTask.filter(
      (tsk, ind) => ind !== Number(target.id.charAt(target.id.length - 1))
    );

    localStorage.setItem("allTask", JSON.stringify(Tasks));
    ul.removeChild(target.parentNode!);
  } else if (target.classList.contains("btn-edt")) {
    let currentTask = allTask.find(
      (tsk, ind) => ind !== Number(target.id.charAt(target.id.length - 1))
    );

    state.value = currentTask ? currentTask.state : "";
    task.value = currentTask ? currentTask.task : "";
    description.value = currentTask ? currentTask.task : "";
  }
});

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const tTask = new Todo(state.value, task.value, description.value);
  debugger;
  allTask && allTask !== null
    ? allTask.push(tTask)
    : () => {
        let allTask: Todo[] = [];
        allTask.push(tTask);
        debugger;
      };

  localStorage.setItem("allTask", JSON.stringify(allTask));
  renderContent(
    state.value,
    task.value,
    description.value,
    ul,
    allTask.length - 1
  );
  form.reset();
});
