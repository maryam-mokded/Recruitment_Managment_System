import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mdp = "password"
   myFunction() {
    if (this.mdp === "password") {
      this.mdp = "text";
    } else {
      this.mdp = "password";
    }
  }

}
