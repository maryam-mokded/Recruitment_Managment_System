import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import {Router} from '@angular/router';
import { Employee } from '../Models/employee';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user =new Employee();
err:number=0;
public loginForm: FormGroup;

  constructor( public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router ) {
    this.loginForm= this.formBuilder.group({
      username: ['', [Validators.minLength(3), Validators.required]],
      password: ['', [Validators.minLength(3), Validators.required]],
    });
   }
  
  // ngOnInit(): void {
  // }

  ngOnInit () {
    // this.authService.loadToken();
    // if (this.authService.getToken()==null || 
    //     this.authService.isTokenExpired())
    //       this.router.navigate(['/']);
  }

  onLoggedin()
  {
    this.authService.login(this.loginForm.value)

      if(this.authService.isAdmin()){
        this.router.navigate(['/employees/admin/dashboardAdmin']);
      }
      else{
        this.router.navigate(['/employees/user-profil/profil']);   
      }
      //this.router.navigate(['/']);     
       //this.router.navigate(['/employees/admin/employeesList']);           
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