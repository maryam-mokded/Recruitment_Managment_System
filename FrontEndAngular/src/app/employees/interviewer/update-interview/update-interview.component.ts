import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { interviewList } from '../../../Models/interviews';
import { InterviewsService } from '../../../Services/interviews.service';

@Component({
  selector: 'app-update-interview',
  templateUrl: './update-interview.component.html',
  styleUrls: ['./update-interview.component.css']
})
export class UpdateInterviewComponent implements OnInit {
  id!: number;
  interview!: interviewList;

  constructor( private route: ActivatedRoute, private router: Router , 
    private interviewsService: InterviewsService ) { }

  ngOnInit(): void {
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

}
