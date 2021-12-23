import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterviewsService } from '../../../Services/interviews.service';
import { interviewList } from '../../../Models/interviews';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateInterviewComponent } from '../create-interview/create-interview.component';

@Component({
  selector: 'app-interviews-list',
  templateUrl: './interviews-list.component.html',
  styleUrls: ['./interviews-list.component.css']
})
export class InterviewsListComponent implements OnInit {

  interviews! : interviewList[];

  constructor(private dialog :MatDialog, private interviewsService: InterviewsService , private router: Router ) {
   }

  ngOnInit(): void {
    this.loadList();
    console.log(this.interviews);
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
    let confirmation =confirm("Do you really want to delete this interview ?")
    if(confirmation)
    this.interviewsService.deleteInterviews(id)
    .subscribe(o =>{
      this.interviews = o;
      this.loadList();
    });

}
interviewDetails(id: number){
  this.router.navigate(['employees/interviewer//detailinterview', id]);
}
updateInterviews(id: number){
  this.router.navigate(['employees/interviewer//updateinterview', id]);
}

refrech() {
  window.location.reload();
}

onOpenDialogCreate():void{
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  this.dialog.open(CreateInterviewComponent, dialogConfig);
}

}
