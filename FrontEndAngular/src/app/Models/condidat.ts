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
}
