import { ValidationErrors } from "@angular/forms";
import { condidat } from "./condidat";
import { Offers } from "./offers";
import { Questionnaire } from "./questionnaire";
import { questionList } from "./questions";

export class interviewList {
    _id!:any;
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
