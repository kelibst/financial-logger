import { HasFormatter } from "./inferfaces/HasFormertter";
import { Invoice } from "./modules/Invoice";
import { Payment } from "./modules/Payment";
//Interfaces

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;

const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  doc =
    type.value === "Invoice"
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

  console.log(doc);
});
