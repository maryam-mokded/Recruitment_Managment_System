import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterviewsService } from '../../../Services/interviews.service';
import { interviewList } from '../../../Models/interviews';

@Component({
  selector: 'app-interviews-list',
  templateUrl: './interviews-list.component.html',
  styleUrls: ['./interviews-list.component.css']
})
export class InterviewsListComponent implements OnInit {
  
  interviews! : interviewList[];

  constructor(private interviewsService: InterviewsService , private router: Router ) {
   }

  ngOnInit(): void {
    this.loadList();
  }

  loadList()
  {
    this.interviewsService
    .getInterviewsList()
    .subscribe(o =>
      {  this.interviews = o;
      });
  }

  deleteInterviews(id: number) {
    this.interviewsService.deleteInterviews(id)
    .subscribe(o =>{        
      this.interviews = o;
      this.loadList();
    });
}
interviewDetails(id: number){
  this.router.navigate(['employees/interviewer//detailinterview', id]);
}
}
