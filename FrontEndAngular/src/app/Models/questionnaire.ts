import { questionList } from "./questions";
export class Questionnaire {
    id_Questionnaire!:number;
    validate?:number;
    question! : questionList;
    interview!: number;
}
