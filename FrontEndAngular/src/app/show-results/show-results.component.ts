import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { condidat } from '../Models/condidat';
import { interviewList } from '../Models/interviews';
import { CondidatService } from '../Services/condidat.service';
import { InterviewsService } from '../Services/interviews.service';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css'],
})
export class ShowResultsComponent implements OnInit {


  TestInterviewDetails:boolean=false;
  TestAcceptedOffre:boolean=false;

  MessageAcceptation:string="";
  offreCheked:interviewList=new interviewList()


  Afficher:boolean=false;
  lien:number=0;
  idMessageDesign?:string="";
  message:string="";
  cinNumber?:number;
  condidatList: interviewList[] = [];
  myForm!: FormGroup;
  etatOffre?:string;

  constructor(
    private dialogClose: MatDialog,
    private interviewServ: InterviewsService,
  ) {}

  ngOnInit(): void {
    this.ValidatedForm();
  }


  AfficherDetailsInterview(o:interviewList){
    this.offreCheked = o
    this.TestInterviewDetails = true;
  }

  AfficherAcceptedOffre(offre:interviewList){
    if(offre.interviewType == "RH"){
      this.MessageAcceptation = "  you made it the next step will be the technical interview"+
      " You'll get notified with the date as soon as possible "

    }else if(offre.interviewType == "technique"){
      this.MessageAcceptation = " Will done ! You reached the final step if you're accepted you will be notified via a phone call"
    }
    this.TestAcceptedOffre = true;
  }
  RevenirAuStatusOffre(){
    this.TestAcceptedOffre = false;
    this.TestInterviewDetails = false;
  }


  ConsultOffre() {
    this.condidatList = [];
    let numero = (document.getElementById('cin') as HTMLInputElement).value;
    console.log(numero);
    this.interviewServ.getInterviewsList().subscribe((ListInterview) => {
      var _j = 0;
      for (var _i = 0; _i < ListInterview.length; _i++) {
        if (ListInterview[_i].user?.cin == numero) {
          this.condidatList[_j] = ListInterview[_i];
          _j++;
        } else {
          console.log('Failed');
        }
      }
      if(this.condidatList.length == 0){
        this.lien = 0;
        this.idMessageDesign = "DangerMessage"
        this.message="you did not apply in any offer with this number of cin '" + numero + "'";
        console.log("vous n'avez postulé dans aucune offre")
      }else{
        this.lien = 1;
        this.idMessageDesign = "SuccessMessage"
        this.message="The condidat of cin number  '"+this.condidatList[0].user?.cin+
         "'  to apply in "+ this.condidatList.length +" offers " ;
        console.log("Le condidat du cin numéro " + this.condidatList[0].user?.cin+
        "à postuler en" + this.condidatList.length + "offre ")
        console.log(this.condidatList);
      }
    });
  }

  AfficherResultatOffre(){
    this.Afficher=true;
    console.log(this.condidatList);
  }

  onClose() {
    this.dialogClose.closeAll();
  }

  ValidatedForm() {
    this.myForm = new FormGroup({
      cin: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]{8}'),
      ]),
    });
  }

  get getcinValidate() {
    return this.myForm.get('cin');
  }
}
