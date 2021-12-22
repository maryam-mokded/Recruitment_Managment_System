import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { condidat } from 'src/app/Models/condidat';
import { Employee } from 'src/app/Models/employee';
import { CondidatService } from 'src/app/Services/condidat.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-details-condidat',
  templateUrl: './details-condidat.component.html',
  styleUrls: ['./details-condidat.component.css']
})
export class DetailsCondidatComponent implements OnInit {

  id!: number;
  condidat?:condidat = new condidat();

  constructor(
    private dialogClose: MatDialog,
    private route: ActivatedRoute,private router: Router,
    private condidatServ: CondidatService) { }

  ngOnInit() {
    this.condidat =JSON.parse(localStorage.getItem('Condidat') || '[]') || [];
    console.log(this.condidat);
  }

  closeDetails(){
    this.dialogClose.closeAll();
  }

}
