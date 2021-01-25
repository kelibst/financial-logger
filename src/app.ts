import { HasFormatter } from "./inferfaces/HasFormertter.js";
import { Invoice } from "./modules/Invoice.js";
import { ListTemplate } from "./modules/ListTemplate.js";
import { Payment } from "./modules/Payment.js";
//Interfaces

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;

const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  doc =
    type.value === "invoice"
      ? new Invoice(
          tofrom.value.trim(),
          details.value.trim(),
          amount.valueAsNumber
        )
      : new Payment(
          tofrom.value.trim(),
          details.value.trim(),
          amount.valueAsNumber
        );

  list.render(doc, type.value, 'end');
});
