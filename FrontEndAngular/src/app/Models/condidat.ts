import { competance } from "./Competance";
import { Cv } from "./Cv";

export class condidat{
  idUser!: number;
  nom!: string;
  prenom!: string;
  email!: string;
  pwd!: string;
  adress!: string;
  photo!:string;
  pdfcv!:Cv;
  cin!: string;
  tel!: number;

    Competance!: string;
    username!:string;
    password!:string;
    roles!:string[];

    lienLinkedIn!:string;
    lienFacebook!:string;
    lienInstagram!:string;
    lienGithub!:string;
}
