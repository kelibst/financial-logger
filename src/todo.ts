import { TodoFormatter } from "./inferfaces/TodoFormatter";

const form = document.querySelector(".new-todo-form") as HTMLFormElement;
const state = document.querySelector("#state") as HTMLSelectElement;
const description = document.querySelector("#description") as HTMLInputElement;
const ul = document.querySelector(".todo-list") as HTMLUListElement;
const task = document.querySelector("#task") as HTMLInputElement;

class Todo {
  constructor(
    public state: string,
    public task: string,
    public description: string,
    private container: HTMLUListElement
  ) {}

  render(){
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.innerText = task.value.trim();
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = description.value.trim();
    li.append(p);

    this.container.prepend(li)
  }
}

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
   const tTask = new Todo(state.value, task.value, description.value, ul)
   tTask.render()

   form.reset()
});
