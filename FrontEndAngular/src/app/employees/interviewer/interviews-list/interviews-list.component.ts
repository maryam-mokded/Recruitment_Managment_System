import { Component, OnInit } from '@angular/core';
import { InterviewsService } from '../../../ConsommationAPI/Services/interviews.service';
import { interviewList } from '../../../ConsommationAPI/Models/interviews';

@Component({
  selector: 'app-interviews-list',
  templateUrl: './interviews-list.component.html',
  styleUrls: ['./interviews-list.component.css']
})
export class InterviewsListComponent implements OnInit {
  interviews! : interviewList[];
  constructor(
    private interviewsService: InterviewsService,
    ) {
   }

  ngOnInit(): void {
    this.interviewsService.getInterviewsList().subscribe(o =>{  this.interviews = o; console.log(this.interviews) });
  }

}
