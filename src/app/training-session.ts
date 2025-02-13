import {Entry} from "./entry";

export class TrainingSession {
  date:Date;
  entries:Entry[]
  category?:string;
  exerciseCount?:number;
  totalSets?:number;

  constructor(date: Date, entries: Entry[]) {
    this.date = date;
    this.entries = entries;
  }
}


