import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar-emp',
  templateUrl: './navbar-emp.component.html',
  styleUrls: ['./navbar-emp.component.css']
})
export class NavBarComponent implements OnInit {

  isLoggedin?: boolean ;

  constructor(
     public authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
  }

  // ngOnInit () {
  //   this.authService.loadToken();
  //   if (this.authService.getToken()==null || 
  //       this.authService.isTokenExpired())
  //         this.router.navigate(['/login']);
  // }

  onLogout(){
    this.authService.logout();
    
  }
}
