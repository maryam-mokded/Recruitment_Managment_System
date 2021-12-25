import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { interviewList } from '../../../Models/interviews';
import { InterviewsService } from '../../../Services/interviews.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.css']
})
export class InterviewDetailsComponent implements OnInit {
  id!: number;
  interview!: interviewList;

  constructor(private dialogClose: MatDialog,private interviewsService: InterviewsService,
    private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.interview = new interviewList();
    this.interview =JSON.parse(localStorage.getItem('interview') || '[]') || [];
    console.log(this.interview);
    // this.id = this.route.snapshot.params['id'];
    
    // this.interviewsService.getInterviews(this.id)
    //   .subscribe(data => {
    //     console.log(data)
    //     this.interview = data;
    //   }, error => console.log(error));
  }


  closeDetails(){
    this.dialogClose.closeAll();
  }
  }


