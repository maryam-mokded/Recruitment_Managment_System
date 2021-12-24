import { condidat } from "./condidat";
import { Offers } from "./offers";

export class interviewList {
    idUser! : number;
    id_Interview!: number;
    interviewDate!: Date;
    interviewType!: string;
    location!: string;
    time!: string;
    test?:number;
    offre?:Offers;
    user?:condidat;
}
