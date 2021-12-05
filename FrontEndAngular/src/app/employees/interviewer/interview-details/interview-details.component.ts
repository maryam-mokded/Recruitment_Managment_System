import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { interviewList } from '../../../Models/interviews';
import { InterviewsService } from '../../../Services/interviews.service';

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.css']
})
export class InterviewDetailsComponent implements OnInit {
  id!: number;
  interview!: interviewList;

  constructor(private interviewsService: InterviewsService,
    private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.interview = new interviewList();

    this.id = this.route.snapshot.params['id'];
    
    this.interviewsService.getInterviews(this.id)
      .subscribe(data => {
        console.log(data)
        this.interview = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['employees/interviewer/interviewList']);
  }
  }


