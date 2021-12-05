import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interviewList } from '../../../Models/interviews';
import { InterviewsService } from '../../../Services/interviews.service';


@Component({
  selector: 'app-create-interview',
  templateUrl: './create-interview.component.html',
  styleUrls: ['./create-interview.component.css']
})
export class CreateInterviewComponent implements OnInit {
  interview: interviewList = new interviewList();
  submitted = false;

  constructor(private interviewsService: InterviewsService,
    private router: Router ) {
   }

  ngOnInit(): void {
  }
  newInterview(): void {
    this.submitted = false;
    this.interview = new interviewList();
  }

  save() {
    this.interviewsService
    .createInterviews(this.interview).subscribe(data => {
      console.log(data)
      this.interview = new interviewList();
      this.gotoList();
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

}
