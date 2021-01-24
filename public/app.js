import { Invoice } from "./modules/Invoice.js";
import { ListTemplate } from "./modules/ListTemplate.js";
import { Payment } from "./modules/Payment.js";
//Interfaces
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    console.log(type.value);
    doc =
        type.value === "invoice"
            ? new Invoice(tofrom.value.trim(), details.value.trim(), amount.valueAsNumber)
            : new Payment(tofrom.value.trim(), details.value.trim(), amount.valueAsNumber);
    list.render(doc, type.value, 'end');
});
