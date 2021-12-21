import { condidat } from "./condidat";
import { Offers } from "./offers";

export class interviewList {
    id_Interview!: number;
    interviewDate!: Date;
    interviewType!: string;
    location!: string;
    offre?:Offers;
    user?:condidat;


}
