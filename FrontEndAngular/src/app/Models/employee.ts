import { competance } from "./Competance";

export class Employee{
    _id!:any;
    nom!: string;
    prenom!: string;
    email!: string;
    pwd!: string;
    adress!: string;
    cin!: string;
    dateEmbauche!: string;
    tel!: number;
    photo!: string;

    Competance!: string;
    username!:string;
    password!:string;
    roles!:string[];

    lienLinkedIn!:string;
    lienFacebook!:string;
    lienInstagram!:string;
    lienGithub!:string;

}
