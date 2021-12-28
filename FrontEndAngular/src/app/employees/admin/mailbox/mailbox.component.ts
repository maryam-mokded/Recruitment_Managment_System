import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ContactService } from '../../../Services/contact.service';
import { contactList } from '../../../Models/contact';


@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {

  @ViewChild('paginator') paginator!:MatPaginator;
  // AddForSotedData
  @ViewChild(MatSort) matSort!:MatSort;

  ELEMENT_DATA?: contactList[];
  employee?: contactList;
  dataSource!:MatTableDataSource<any>;
  displayedColumns: string[] = ['id_Contact','nom', 'prenom', 'email','comment','action'];

  constructor(private contactService: ContactService, private router: Router) { }

ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.contactService.getContactList().subscribe(o =>{
      this.ELEMENT_DATA= o;
      this.dataSource = new MatTableDataSource(o);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort =this.matSort;
      console.log(this.dataSource);
      console.log(this.ELEMENT_DATA);});

  }


  deleteContact(id: number) {
    this.contactService.getContact(id).subscribe(o =>{
      this.ELEMENT_DATA= o;});
      console.log(this.ELEMENT_DATA);
    let confirmation =confirm("Are you sure you want to delete the contact with id : "+id+" ??")
    if(confirmation)
    this.contactService.deleteContact(id).subscribe(data => {
          console.log(data);
      window.location.reload();
    });
  }


  filterData($event:any){
    this.dataSource.filter = $event.target.value;
  }



}
