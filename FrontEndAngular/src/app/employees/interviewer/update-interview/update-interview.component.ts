import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { interviewList } from '../../../Models/interviews';
import { InterviewsService } from '../../../Services/interviews.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update-interview',
  templateUrl: './update-interview.component.html',
  styleUrls: ['./update-interview.component.css']
})
export class UpdateInterviewComponent implements OnInit {
  myForm!:FormGroup;
  id!: number;
  interview!: interviewList;

  constructor( private dialogClose: MatDialog, private route: ActivatedRoute, private router: Router , 
    private interviewsService: InterviewsService ) { }

  ngOnInit(): void {
    this.ValidatedForm();
    this.interview = new interviewList();
    this.interview =JSON.parse(localStorage.getItem('interview') || '[]') || [];
    console.log(this.interview);
  }
  updateInterviews(){
    this.interviewsService.updateInterviews(this.interview.id_Interview,this.interview)
    .subscribe(data => console.log(data),error => console.log(error));
    this.interview = new interviewList();
    this.dialogClose.closeAll();
    window.location.reload();
  }
  
  onSubmit() {
    this.updateInterviews();  
  }

  gotoList() {
    this.router.navigate(['employees/interviewer/interviewList']);
  }

  onClose() {
    this.dialogClose.closeAll();
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

}
