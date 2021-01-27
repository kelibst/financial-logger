import { HasFormatter } from "../inferfaces/HasFormertter.js";

export class Invoice implements HasFormatter {
    constructor(
      readonly client: string,
      private details: string,
      public amount: number
    ) {}
      sing(){
        console.log('kill the song');
      }
    format() {
      return `${this.client} owes ${this.amount} for ${this.details}`;
    }
  }
  