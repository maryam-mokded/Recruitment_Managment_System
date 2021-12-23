import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interviewList } from '../../../Models/interviews';
import { InterviewsService } from '../../../Services/interviews.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';



@Component({
  selector: 'app-create-interview',
  templateUrl: './create-interview.component.html',
  styleUrls: ['./create-interview.component.css']
})
export class CreateInterviewComponent implements OnInit {
  myForm!:FormGroup;
  interview: interviewList = new interviewList();
  submitted = false;

  constructor( private dialogClose: MatDialog, private interviewsService: InterviewsService,
    private router: Router ) {
   }

  ngOnInit(): void {
    this.ValidatedForm();
  }
  newInterview(): void {
    this.submitted = false;
    this.interview = new interviewList();
  }

  save() {
    this.interview.id_Interview =1;
    this.interviewsService
    .createInterviews(this.interview).subscribe(data => {
      console.log(data)
      this.interview = new interviewList();
      this.dialogClose.closeAll();
      window.location.reload();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['employees/interviewer/interviewList']);
  }
  ValidatedForm(){
    this.myForm = new FormGroup({
      'interviewType' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(15)]),
      'location' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(15)]),
      'time' : new FormControl(null,[Validators.required , Validators.pattern("[0-9].*"),Validators.maxLength(20)]),
      'interviewDate' : new FormControl(null,[Validators.required , Validators.pattern("[0-9].*"),Validators.maxLength(20)]),

  });
 }

 get InterviewType(){
  return this.myForm.get('interviewType') ;
}

get Location(){
  return this.myForm.get('location') ;
}
get Time(){
  return this.myForm.get('time') ;
}
get InterviewDate(){
  return this.myForm.get('interviewDate') ;
}

onClose() {
  this.dialogClose.closeAll();
}

}
