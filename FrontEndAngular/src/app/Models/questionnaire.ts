import { interviewList } from "./interviews";
import { questionList } from "./questions";
export class Questionnaire {
    _id!:any;
    validate?:number;
    question! : questionList;
    interview!: interviewList;
}
