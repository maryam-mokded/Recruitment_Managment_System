import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { contactList } from '../Models/contact';
import { ContactService } from '../Services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contact: contactList = new contactList();
  // myForm!:FormGroup;
  submitted = false;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    // this.ValidatedForm();
  }

  newContact(): void {
    this.submitted = false;
    this.contact = new contactList();
  }
  save() {
    this.contact.id_Contact = 1;
    // let confirmation = confirm("Do you really want to send this message ?")
    // if(confirmation)
    this.contactService.createContact(this.contact).subscribe(data => {
      console.log(data)
      this.contact = new contactList();
      window.location.reload();
    },
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

//  ValidatedForm(){
//     this.myForm = new FormGroup({
//       // 'nom' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(15)]),
//       // 'prenom' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(15)]),
//       // 'email' : new FormControl(null, [Validators.required,Validators.email]),
//       // 'comment' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(100)]),

//   });
//  }

//  get Nom(){
//   return this.myForm.get('nom') ;
// }
// get Prenom(){
//   return this.myForm.get('prenom') ;
// }
// get Email(){
//   return this.myForm.get('email') ;
// }
// get Comment(){
//   return this.myForm.get('comment') ;
// }
}
