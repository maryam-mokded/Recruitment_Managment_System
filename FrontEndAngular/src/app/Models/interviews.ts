import { ValidationErrors } from "@angular/forms";
import { condidat } from "./condidat";
import { Offers } from "./offers";
import { Questionnaire } from "./questionnaire";
import { questionList } from "./questions";

export class interviewList {
    id_Question(id_Question: any): string {
      throw new Error('Method not implemented.');
    }
    idUser! : number;
    id_Interview!: number;
    interviewDate!: Date;
    interviewType!: string;
    location!: string;
    time!: string;
    test?:number;
    note?:number;
    offre?:Offers;
    user?:condidat;
    questionnaire?:questionList;
}
