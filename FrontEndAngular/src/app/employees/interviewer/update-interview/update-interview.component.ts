import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { interviewList } from '../../../Models/interviews';
import { InterviewsService } from '../../../Services/interviews.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-interview',
  templateUrl: './update-interview.component.html',
  styleUrls: ['./update-interview.component.css']
})
export class UpdateInterviewComponent implements OnInit {
  myForm!:FormGroup;
  id!: number;
  interview!: interviewList;

  constructor( private route: ActivatedRoute, private router: Router , 
    private interviewsService: InterviewsService ) { }

  ngOnInit(): void {
    this.ValidatedForm();
    this.interview = new interviewList();

    this.id = this.route.snapshot.params['id'];
    
    this.interviewsService.getInterviews(this.id)
      .subscribe(data => {
        console.log(data)
        this.interview = data;
      }, error => console.log(error));
  }
  updateInterviews(){
    this.interviewsService.updateInterviews(this.id,this.interview)
    .subscribe(data => console.log(data),error => console.log(error));
    this.interview = new interviewList();
    this.gotoList();
  }
  onSubmit() {
    this.updateInterviews();  
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

}
