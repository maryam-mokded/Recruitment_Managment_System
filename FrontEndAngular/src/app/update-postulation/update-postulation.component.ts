import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { condidat } from '../Models/condidat';
import { Cv } from '../Models/Cv';
import { CondidatService } from '../Services/condidat.service';

@Component({
  selector: 'app-update-postulation',
  templateUrl: './update-postulation.component.html',
  styleUrls: ['./update-postulation.component.css'],
})
export class UpdatePostulationComponent implements OnInit {

  
  public Condidat = new condidat();
  public CvModif = new Cv();
  myForm!:FormGroup;

  constructor(
    private dialogClose: MatDialog,
    private condServ: CondidatService,
  ) {}

  ngOnInit(): void {
    //retourner un condidat avec un id 
    this.getCondidat();
    this.ValidatedForm();
    
  }

  getCondidat(){
    this.condServ
    .ConsulterCondidat(
      JSON.parse(localStorage.getItem('IdCondAdd') || '[]') || []
    )
    .subscribe((c) => {
      this.Condidat = c;
      //console.log(this.Condidat);
    });
  }
  supprimerDemande(id: number) {
    let confirmation = confirm('Êtes-vous sûr de supprimer votre demande ??');
    if (confirmation)
      this.condServ.supprimerCondidat(id).subscribe(() => {
        console.log('produit supprimé');
      });
    this.dialogClose.closeAll();
  }

  ModifierCondidat() {
    this.condServ.modifierCondidat(this.Condidat).subscribe(() => {
      this.dialogClose.closeAll();
    });
  }


  ValidatedForm(){
    this.myForm = new FormGroup({
      'name' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(15)]),        
      'prenom' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(15)]),        
      'adresse' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(50)]),   
      'cin' : new FormControl(null,[Validators.required , Validators.pattern("[0-9 ]{8}")]),   
      'telephone' : new FormControl(null,[Validators.required,Validators.pattern("[0-9]{8}")]),   
      'email' : new FormControl(null, [Validators.required,Validators.email]),        
    });
  }


  get name(){
    return this.myForm.get('name') ;
  }
  get prenom(){
    return this.myForm.get('prenom') ;
  }
  get email(){
    return this.myForm.get('email') ;
  }
  get adresse(){
    return this.myForm.get('adresse') ;
  }
  get cin(){
    return this.myForm.get('cin') ;
  }
  get telephone(){
    return this.myForm.get('telephone') ;
  }

}
