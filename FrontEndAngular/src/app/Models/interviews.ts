import { ValidationErrors } from "@angular/forms";
import { condidat } from "./condidat";
import { Offers } from "./offers";
import { Questionnaire } from "./questionnaire";
import { questionList } from "./questions";

export class interviewList {
    idUser! : number;
    id_Interview!: number;
    interviewDate!: Date;
    interviewType!: string;
    location!: string;
    time!: string;
    offre?:Offers;
    user?:condidat;
    questionnaire?:questionList;
}
