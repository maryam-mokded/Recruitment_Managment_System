import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import {Router} from '@angular/router';
import { Employee } from '../Models/employee';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user =new Employee();
err:number=0;

  constructor(private authService: AuthService, public router:Router ) { }

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
    this.authService.login(this.user).subscribe((data)=> {
      let jwToken : any   = data.headers.get('Authorization');
      this.authService.saveToken(jwToken);

      if(this.authService.isAdmin()){
        this.router.navigate(['/employees/admin/dashboardAdmin']);
      }
      else{
        this.router.navigate(['/employees/user-profil/profil']);   
      }
      //this.router.navigate(['/']);     
       //this.router.navigate(['/employees/admin/employeesList']);           
    },(err)=>{   this.err = 1;
});

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
